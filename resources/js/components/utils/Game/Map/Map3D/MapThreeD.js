import React, { Component } from "react";
// import * as THREE from "three";
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    CircleGeometry,
    PlaneGeometry,
    MeshBasicMaterial,
    Mesh,
    BoxGeometry,
    DirectionalLight,
    AmbientLight,
    TextureLoader
} from 'three';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
// import { TextureLoader } from "three/examples/jsm/loaders/TextureLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Interaction } from 'three.interaction';
import { GameContext } from "./../../GameContext";
import ActionModal from "./../ActionModal/ActionModal";


//const previousContext;

// const contextType = GameContext;

class MapThreeD extends Component {


    constructor(props) {
        super(props);

        this.state = {
        }

        this.previousContext;
    }



    loadObj = (x, y, z, name) => {
        return new Promise(async (resolve, reject) => {
            try {
                const mtlLoader = new MTLLoader();
                let materialUrl =
                    `http://127.0.0.1:8000/objects/${name}.mtl`;


                mtlLoader.load(materialUrl, materials => {
                    materials.preload();

                    const objLoader = new OBJLoader();
                    objLoader.setMaterials(materials);

                    let modelUrl = `http://127.0.0.1:8000/objects/${name}.obj`;

                    console.log([`http://127.0.0.1:8000/objects/${name}.obj`])

                    objLoader.load(modelUrl, obj => {
                        let texture = new TextureLoader().load(`http://127.0.0.1:8000/objects/${name}.png`);
                        obj.traverse(function (child) {   // aka setTexture
                            if (child instanceof Mesh) {
                                child.material.map = texture;
                            }
                        });

                        obj.scale.set(0.0005, 0.0005, 0.0005);
                        this.scene.add(obj);
                        obj.position.set(x, y, z);
                        //obj.rotateX(-Math.PI * 0.5);

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
        this.previousContext = this.context;

        const width = this.mountMap.clientWidth;
        const height = this.mountMap.clientHeight;

        console.log(["width", width, height])

        const scene = new Scene();
        const camera = new PerspectiveCamera(
            90, width / height, 1, 100
        );
        camera.position.z = 15;
        camera.position.x = 5;
        //camera.position.y = 5;

        const mapRenderer = new WebGLRenderer({ antialias: true });

        this.scene = scene;
        this.camera = camera;
        this.mapRenderer = mapRenderer;

        const interaction = new Interaction(this.mapRenderer, this.scene, this.camera);





        // await this.loadObj("top-left", scene);
        // await this.loadObj("top-right", scene);
        // await this.loadObj("bottom-right", scene);
        // await this.loadObj("bottom-left", scene);


        mapRenderer.setClearColor("#e8f4ff");
        mapRenderer.setSize(width, height, false);

        //light
        var light = new DirectionalLight(0xffffff, 0.5);
        light.position.setScalar(5);
        scene.add(light);
        scene.add(new AmbientLight(0xffffff, 0.5));

        //cursor control
        this.controls = new OrbitControls(this.camera, this.mountMap);
        this.controls.target.set(0, 0, 0); // view direction perpendicular to XY-plane
        this.controls.enableZoom = true; // optional
        this.controls.screenSpacePanning = true;
        this.controls.minPolarAngle = this.controls.maxPolarAngle = 1.4;

        this.mountMap.appendChild(this.mapRenderer.domElement);
        this.start();

        // this.loadMapElements()
    };

    componentDidUpdate() {
        if (this.previousContext.mapConfig !== this.context.mapConfig) {
            this.loadMapElements();
        }

        this.previousContext = this.context;
    }

    loadMapElements = () => {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let geometryLand = new PlaneGeometry(1, 1);
                let materialLand = new MeshBasicMaterial({ color: i % 2 === 0 && j % 2 === 0 ? "black" : i % 2 === 0 && j % 2 !== 0 ? "red" : j % 2 === 0 && i % 2 !== 0 ? "blue" : "green" });
                let land = new Mesh(geometryLand, materialLand);
                land.rotateX(-Math.PI * 0.5);
                land.position.set(i, 1, j)

                this.scene.add(land);

                //console.log(["this.context", this.context])

                this.context.mapConfig && this.context.mapConfig.length > 0 && this.context.mapConfig.map(async (configElement, i) => {
                    if (configElement.x === i && configElement.y === 1 && configElement.z === j) {
                        console.log(configElement)
                        await this.loadObj(configElement.x, configElement.y, configElement.z, configElement.value);
                    }
                })

                land.cursor = 'pointer';
                land.on('click', (e) => {
                    console.log("test", e, e.data.target.position)

                    let { x, y, z } = e.data.target.position;

                    //this.context.handleSetActionModal(x, y, z)

                    // let geometry = new BoxGeometry(0.3, 0.3, 0.3);
                    // let material = new MeshBasicMaterial({ color: "#505c62" });
                    // let cube = new Mesh(geometry, material);
                    // cube.rotateX(-Math.PI * 0.5);

                    // scene.add(cube);
                    // cube.position.set(x, y, z);
                });
            }
        }
    }

    componentWillUnmount = () => {
        this.stop();
        this.mountMap.removeChild(this.mapRenderer.domElement);
    };

    start = () => {
        if (!this.frameIdMap) {
            this.frameIdMap = requestAnimationFrame(this.animate);
        }
    };

    stop = () => {
        cancelAnimationFrame(this.frameIdMap);
    };

    animate = () => {
        this.renderScene();
        this.frameIdMap = window.requestAnimationFrame(this.animate);
    };

    renderScene = () => {
        this.mapRenderer.render(this.scene, this.camera);
    };

    render() {
        const { showActionModal } = this.context;

        return (
            <div
                className="three-d__container"
                ref={mount => {
                    this.mountMap = mount;
                }}
            >
                {showActionModal && <ActionModal />}
            </div>
        );
    }
}
MapThreeD.contextType = GameContext;
export default MapThreeD;
