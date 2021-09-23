import { Scene, Mesh, Vector3 } from "@babylonjs/core";
import { Pickup } from "./pickup";

export class Environment {
    private _scene: Scene;

    constructor(scene: Scene) {
        this._scene = scene;
    }

    public async load() {
        var ground = Mesh.CreateBox("ground", 24, this._scene);
        var pickup = new Pickup(this._scene)

        pickup.Pickup.position.y += (pickup.Pickup.scaling.x /.5) + (pickup.Pickup.scaling.x / .4);

        ground.scaling = new Vector3(1,.02,1);
    }
}