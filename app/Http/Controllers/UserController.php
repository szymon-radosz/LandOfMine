<?php

namespace App\Http\Controllers;
use App\User;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Validator;

class UserController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['result' => 'invalid_credentials'], 401);
            } else {
                $user = User::where('email', $request->email)
                    ->first();
            }
        } catch (JWTException $e) {
            return response()->json(['result' => 'could_not_create_token'], 401);
        }

        return response()->json(['result' => [
            'token' => $token,
            'user_role' => $user->admin_role ? "admin" : "customer",
        ]], 200);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['result' => 'Invalid Data'], 401);
        }

        $user = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password'))
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json(['result' => compact('user', 'token')], 201);
    }

    public function getAuthenticatedUser()
    {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['result' => 'user_not_found'], 401);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['result' => 'token_expired'], 401);
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['result' => 'token_invalid'], 401);
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['result' => 'token_absent'], 401);
        }

        return response()->json(['result' => compact('user')], 201);
    }

    public function checkIfEmailExists(Request $request)
    {
        try {
            $email = $request->email;

            $user = User::where('email', $email)->count();

            return response()->json(['result' => $user, 201]);
        } catch (\Exception $e) {
            $user = User::where('email', $email)->get();

            $this->storeErrorLog($user->id, '/checkIfEmailExists', $e->getMessage());

            return response()->json(['result' => $e->getMessage()], 401);
        }
    }
}
