import React, { Component } from "react";
// import * as THREE from "three";
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    PlaneGeometry,
    MeshBasicMaterial,
    Mesh,
    DirectionalLight,
    AmbientLight,
    TextureLoader
} from 'three';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Interaction } from 'three.interaction';
import { GameContext } from "./../../GameContext";
import ActionModal from "./../ActionModal/ActionModal";

class MapThreeD extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }

        this.previousContext;
    }

    componentDidMount = async () => {
        this.loadMapInitSettings();
    };

    componentDidUpdate() {
        if (this.previousContext.mapConfig !== this.context.mapConfig) {
            this.loadRoadAndEmptyMapElements();
            this.loadMapConfigObjects();
        }

        this.previousContext = this.context;
    }

    componentWillUnmount = () => {
        this.stop();
        this.mountMap.removeChild(this.mapRenderer.domElement);
    };

    loadObj = (x, y, z, name, scaleY = false, scaleParam = 0.0013) => {
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

                        obj.scale.set(scaleParam, scaleParam, scaleParam);
                        this.scene.add(obj);
                        obj.position.set(x, y, z);

                        //make e.g. road vartical - horizontal
                        if (scaleY) {
                            obj.rotateY(Math.PI * 0.5);
                        }

                        resolve("loaded");
                    });
                });
            } catch (err) {
                console.log(err);
                reject("not loaded");
            }
        });
    };

    loadMapInitSettings = () => {
        this.previousContext = this.context;

        const width = this.mountMap.clientWidth;
        const height = this.mountMap.clientHeight;

        console.log(["width", width, height])

        const scene = new Scene();
        const camera = new PerspectiveCamera(
            90, width / height, 1, 100
        );
        camera.position.z = 5;
        camera.position.x = 5;
        camera.position.y = 1.5;

        const mapRenderer = new WebGLRenderer({ antialias: true });

        this.scene = scene;
        this.camera = camera;
        this.mapRenderer = mapRenderer;

        const interaction = new Interaction(this.mapRenderer, this.scene, this.camera);

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
    }

    loadRoadAndEmptyMapElements = async () => {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                //console.log(["i, j", i, j])

                let geometryLand = new PlaneGeometry(1, 1);
                let materialLand = new MeshBasicMaterial({
                    color:
                        i % 2 === 0 &&
                            j % 2 === 0 ? "transparent" :
                            i % 2 === 0 &&
                                j % 2 !== 0 ? "red" :
                                j % 2 === 0 &&
                                    i % 2 !== 0 ? "blue" : "green"
                });
                let land = new Mesh(geometryLand, materialLand);
                land.rotateX(-Math.PI * 0.5);
                land.position.set(i, 0, j)

                // road cross
                if (i % 2 === 0 &&
                    j % 2 === 0) {
                    await this.loadObj(i + 0.04, 0.005, j - 0.05, "roadCross", false, 0.00128);
                }

                //roadHorizontal
                if (i % 2 === 0 &&
                    j % 2 !== 0) {
                    await this.loadObj(i + 0.07, 0.005, j - 0.08, "roadHorizontal", false, 0.00128);
                }

                // //roadVertical
                if (j % 2 === 0 &&
                    i % 2) {
                    await this.loadObj(i - 0.08, 0.005, j - 0.08, "roadHorizontal", true, 0.00128);
                }

                this.scene.add(land);

                land.cursor = 'pointer';
                land.on('click', (e) => {
                    //console.log("test", e, e.data.target.position)

                    let { x, y, z } = e.data.target.position;

                    this.context.handleSetActionModal(x, y, z)
                });

                //change opacity on hover
                let startGreenColor;
                land.on('mouseover', e => {
                    startGreenColor = e.data.target.material.color.g;
                    e.data.target.material.color.g = 0.8
                });
                land.on('mouseout', e => {
                    e.data.target.material.color.g = startGreenColor
                });
            }
        }
    }

    loadMapConfigObjects = () => {
        this.context.mapConfig && this.context.mapConfig.length > 0 && this.context.mapConfig.map(async (configElement, i) => {
            let { x, y, z, value: name, scaleY, scaleParam } = configElement;
            await this.loadObj(x, y, z, name, scaleY, scaleParam);
        })
    }

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
