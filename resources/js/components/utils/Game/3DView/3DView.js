import React, { Component } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class ThreeDView extends Component {
    constructor(props) {
        super(props);
    }

    loadObj = (position, scene) => {
        return new Promise(async (resolve, reject) => {
            try {
                const mtlLoader = new MTLLoader();
                let materialUrl =
                    "http://127.0.0.1:8000/objects/Scene_City.mtl";

                mtlLoader.load(materialUrl, materials => {
                    materials.preload();

                    const objLoader = new OBJLoader();
                    objLoader.setMaterials(materials);
                    let modelUrl;

                    if (position === "top-left") {
                        //modelUrl = "http://127.0.0.1:8000/modeltwo.obj";
                        modelUrl = "http://land-of-mine.com/modeltwo.obj";
                    } else if (position === "top-right") {
                        modelUrl = "http://land-of-mine.com/modeltwo.obj";
                    } else if (position === "bottom-right") {
                        modelUrl = "http://land-of-mine.com/modeltwo.obj";
                    } else if (position === "bottom-left") {
                        modelUrl = "http://land-of-mine.com/modeltwo.obj";
                    } else {
                        modelUrl =
                            "http://127.0.0.1:8000/objects/Scene_City.obj";
                    }

                    objLoader.load(modelUrl, obj => {
                        obj.scale.set(0.006, 0.006, 0.006);
                        scene.add(obj);

                        if (position === "top-left") {
                            obj.position.set(-3, 0.2, -3.5);
                        } else if (position === "top-right") {
                            obj.position.set(3, 0.2, -3.5);
                        } else if (position === "bottom-right") {
                            obj.position.set(3, 0.2, 1.5);
                        } else if (position === "bottom-left") {
                            obj.position.set(-3, 0.2, 1.5);
                        } else {
                            obj.position.set(-3, 0.2, 3);
                        }

                        obj.rotateX(0.05);
                        resolve("loaded");
                    });
                });
            } catch (err) {
                console.log(err);
                reject("not loaded");
            }
        });
    };

    componentDidMount = async () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        );
        camera.position.z = 5;
        //camera.position.y = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });

        //create green land
        var geometryLand = new THREE.CircleGeometry(10, 1000);
        var materialLand = new THREE.MeshBasicMaterial({ color: "#b9ffb9" });
        var land = new THREE.Mesh(geometryLand, materialLand);
        land.rotateX(4.8);
        scene.add(land);

        //create vertical road
        var geometry = new THREE.BoxGeometry(2, 0.1, 18);
        var material = new THREE.MeshBasicMaterial({ color: "#505c62" });
        var cube = new THREE.Mesh(geometry, material);
        cube.rotateX(0.095);

        scene.add(cube);
        cube.position.set(0, 0.1, 0);

        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.land = land;

        await this.loadObj("top-left", scene);
        await this.loadObj("top-right", scene);
        await this.loadObj("bottom-right", scene);
        await this.loadObj("bottom-left", scene);
        // await this.loadObj("bottom-lesdsdft", scene);

        renderer.setClearColor("#e8f4ff");
        renderer.setSize(width, height);

        //light
        var light = new THREE.DirectionalLight(0xffffff, 0.5);
        light.position.setScalar(5);
        scene.add(light);
        scene.add(new THREE.AmbientLight(0xffffff, 0.5));

        //cursor control
        this.controls = new OrbitControls(this.camera, this.mount);
        this.controls.target.set(0, 0, 0); // view direction perpendicular to XY-plane
        this.controls.enableZoom = false; // optional
        this.controls.minPolarAngle = this.controls.maxPolarAngle = 1.4;

        this.mount.appendChild(this.renderer.domElement);
        this.start();
    };

    componentWillUnmount = () => {
        this.stop();
        this.mount.removeChild(this.renderer.domElement);
    };

    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate);
        }
    };

    stop = () => {
        cancelAnimationFrame(this.frameId);
    };

    animate = () => {
        this.land.rotation.z += 0.01;

        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    };

    renderScene = () => {
        this.renderer.render(this.scene, this.camera);
    };

    render() {
        return (
            <div
                className="three-d__container"
                ref={mount => {
                    this.mount = mount;
                }}
            >
                <div
                    className="map__left-top--btn"
                    onClick={() => this.props.handleShowThreeDView(false)}
                >
                    <p>Go back to the map</p>
                </div>
            </div>
        );
    }
}
export default ThreeDView;
