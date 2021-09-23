import {Scene, Mesh, Vector3} from '@babylonjs/core'

export class Pickup
{
    private _scene: Scene;

    public readonly Pickup: Mesh;

    public PickedUp: boolean = false;

    constructor(scene: Scene){
        this._scene = scene;

        this.Pickup = Mesh.CreateBox("pickup1", 3, scene)

        this.Pickup.rotate(Vector3.Forward(), 45)
        this.Pickup.rotate(Vector3.Right(), 45)

        scene.onBeforeRenderObservable.add(() => {
            this.update();
        });
    }

    public async update(){
        var _deltaTime = this._scene.getEngine().getDeltaTime() / 1000.0;
        this.Pickup.rotateAround(this.Pickup.position, Vector3.Up(), 0.5 * _deltaTime)
    }
}