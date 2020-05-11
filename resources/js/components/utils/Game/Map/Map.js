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
import { MapControls } from "three/examples/jsm/controls/OrbitControls";
import { Interaction } from 'three.interaction';
import { GameContext } from "./../GameContext";
import ActionModal from "./ActionModal/ActionModal";
import DescriptionModal from "./DescriptionModal/DescriptionModal"

class MapThreeD extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialObjectScale: 0.00128,
        }

        this.previousContext;
    }

    componentDidMount = async () => {
        this.loadMapInitSettings();

        //load roads and default elements once
        this.loadRoadAndEmptyMapElements();
    };

    componentDidUpdate() {
        if (this.previousContext.mapConfig !== this.context.mapConfig) {
            this.loadMapConfigObjects();
        }

        this.previousContext = this.context;
    }

    componentWillUnmount = () => {
        this.stop();
        this.mountMap.removeChild(this.mapRenderer.domElement);
    };

    loadObj = (x, y, z, name, scaleY = false, scaleParam = 0.001, descriptionHeader, descriptionContent) => {
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

                        obj.on('click', e => {
                            console.log(["description", descriptionHeader, descriptionContent])

                            this.context.handleSetDescriptionModal(descriptionHeader, descriptionContent)
                        });

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

        //console.log(["width", width, height])

        const scene = new Scene();
        const camera = new PerspectiveCamera(
            20, width / height, 1, 1000
        );
        camera.position.z = 5;
        camera.position.x = 5;
        camera.position.y = 5.5;

        const mapRenderer = new WebGLRenderer({ antialias: true });

        this.scene = scene;
        this.camera = camera;
        this.mapRenderer = mapRenderer;

        const interaction = new Interaction(this.mapRenderer, this.scene, this.camera);

        mapRenderer.setClearColor("#e8f4ff");
        mapRenderer.setSize(width, height, false);
        mapRenderer.setPixelRatio(window.devicePixelRatio);

        //light
        var light = new DirectionalLight(0xffffff, 0.5);
        light.position.setScalar(5);
        scene.add(light);
        scene.add(new AmbientLight(0xffffff, 1));

        //cursor control
        this.controls = new MapControls(this.camera, this.mountMap);
        this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        this.controls.dampingFactor = 0.05;
        this.controls.minDistance = 5;
        this.controls.maxDistance = 10;
        this.controls.enableRotate = false;
        this.controls.maxPolarAngle = Math.PI / 2;

        //set fundamental black plate
        let geometryFundament = new PlaneGeometry(50, 50);
        let materialFundament = new MeshBasicMaterial({
            color: "black"
        });
        let fundament = new Mesh(geometryFundament, materialFundament);
        fundament.rotateX(-Math.PI * 0.5);
        fundament.position.set(-7, -1.015, -5)
        this.scene.add(fundament);

        //fundamental on mouse over will restart camera position to the initial value - then the user not go further!!!!
        // fundament.on('mouseover', e => {
        //     this.camera.position.z = 5
        //     this.camera.position.x = 5;
        //     this.camera.position.y = 1;
        // });

        //window.addEventListener('resize', this.onWindowResize, false);
        this.mountMap.appendChild(this.mapRenderer.domElement);
        this.start();
    }

    loadRoadAndEmptyMapElements = async () => {
        const { initialObjectScale } = this.state;
        for (let i = 0; i < 30; i++) {
            for (let j = 0; j < 30; j++) {
                //console.log(["i, j", i, j])

                // road cross
                if (i % 2 === 0 &&
                    j % 2 === 0) {
                    await this.loadObj(i + 0.05 - 20, -1, j - 0.05 - 20, "roadCross", false, initialObjectScale);
                }

                //roadHorizontal
                else if (i % 2 === 0 &&
                    j % 2 !== 0) {
                    await this.loadObj(i + 0.09 - 20, -1, j - 0.08 - 20, "roadHorizontal", false, initialObjectScale);
                }

                // //roadVertical
                else if (j % 2 === 0 &&
                    i % 2) {
                    await this.loadObj(i - 0.08 - 20, -1, j - 0.07 - 20, "roadHorizontal", true, initialObjectScale);
                }

                //empty land
                else {

                    let geometryLand = new PlaneGeometry(1, 1);
                    let materialLand = new MeshBasicMaterial({
                        color:
                            "green"
                    });

                    let land = new Mesh(geometryLand, materialLand);
                    land.rotateX(-Math.PI * 0.5);
                    land.position.set(i - 20, -1.005, j - 20)

                    this.scene.add(land);

                    land.cursor = 'pointer';
                    land.on('click', (e) => {
                        //console.log("test", e, e.data.target.position)

                        let { x, y, z } = e.data.target.position;

                        this.context.handleSetActionModal(x, y, z)
                    });
                }
            }
        }
    }

    loadMapConfigObjects = () => {
        this.context.mapConfig && this.context.mapConfig.length > 0 && this.context.mapConfig.map(async (configElement, i) => {
            const { x, y, z, value: name, scaleY, scaleParam, descriptionHeader, descriptionContent } = configElement;

            //console.log(["x, y, z, value: name, scaleY, scaleParam ", x, y, z, name, scaleY, scaleParam, descriptionHeader, descriptionContent])
            await this.loadObj(x, y, z, name, scaleY, scaleParam, descriptionHeader, descriptionContent);

            //load plate above initial green plate an object to make plate unclickable
            this.renderBuildingPlateFundament(x, z);

            //plate and object should display description on click
        })
    }

    renderBuildingPlateFundament = (x, z) => {
        let geometryObjectPlate = new PlaneGeometry(2, 2);
        let materialObjectPlate = new MeshBasicMaterial({ color: "yellow" });

        let objectPlate = new Mesh(geometryObjectPlate, materialObjectPlate);
        objectPlate.rotateX(-Math.PI * 0.5);
        objectPlate.position.set(x, -1.002, z)

        this.scene.add(objectPlate);
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
        const { showActionModal, showDescriptionModal } = this.context;

        return (
            <div
                className="three-d__container"
                ref={mount => {
                    this.mountMap = mount;
                }}
            >
                {showActionModal && <ActionModal />}

                {showDescriptionModal && <DescriptionModal />}
            </div>
        );
    }
}
MapThreeD.contextType = GameContext;
export default MapThreeD;
