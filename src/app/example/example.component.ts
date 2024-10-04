import { Component, AfterViewInit, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import gsap from "gsap";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {

  }

  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  //
  // Scene
  //

  private scence!: THREE.Scene;

  createScene() {
    this.scence = new THREE.Scene;
    this.cube.rotation.x += 1;
  }

  //
  // Cube
  //

  private geometry = new THREE.BoxGeometry(1, 1, 1);

  private texture1 = new THREE.TextureLoader().load("/assets/1.jpeg")
  private texture2 = new THREE.TextureLoader().load("/assets/2.jpeg")
  private texture3 = new THREE.TextureLoader().load("/assets/3.jpeg")
  private texture4 = new THREE.TextureLoader().load("/assets/4.jpeg")
  private texture5 = new THREE.TextureLoader().load("/assets/5.jpeg")
  private texture6 = new THREE.TextureLoader().load("/assets/6.jpeg")

  textureCube: any = []

  textureMethod() {
    this.textureCube.push(new THREE.MeshBasicMaterial({ map: this.texture1 }))
    this.textureCube.push(new THREE.MeshBasicMaterial({ map: this.texture2 }))
    this.textureCube.push(new THREE.MeshBasicMaterial({ map: this.texture3 }))
    this.textureCube.push(new THREE.MeshBasicMaterial({ map: this.texture4 }))
    this.textureCube.push(new THREE.MeshBasicMaterial({ map: this.texture5 }))
    this.textureCube.push(new THREE.MeshBasicMaterial({ map: this.texture6 }))
  }

  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.textureCube);

  //
  // Sizes
  //

  private sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  //
  // Camera
  //

  private camera!: THREE.PerspectiveCamera;

  createCamera() {
    this.camera = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 1000)
    this.camera.position.z = 5
    this.scence.add(this.camera)
    this.scence.add(this.cube)
  }


  private transformCube = [
    {
      rotationZ: 0.45,
      positionX: 1.5
    },
    {
      rotationZ: -0.45,
      positionX: -1.5
    },
    {
      rotationZ: 0.0314,
      positionX: 0
    },
    {
      rotationZ: 0.0314,
      positionX: 0
    }]

  private currentSection = 0

  private checkStartPosition = 0;

  scroll() {

    const newSection = Math.round(window.scrollY / this.sizes.height) // what

    if (newSection == 0 && this.checkStartPosition == 0) {
      this.cube.position.x = 1.5
      this.checkStartPosition++;
    }

    if (newSection != this.currentSection) { // what
      this.currentSection = newSection // what

        gsap.to(
          this.cube.rotation, {
          duration: 1,
          ease: 'power2.inOut',
          z: this.transformCube[this.currentSection].rotationZ
        }
        )
        gsap.to(
          this.cube.position, {
          duration: 1,
          ease: 'power2.inOut',
          x: this.transformCube[this.currentSection].positionX
        }
        )
    }

  }

  //
  // Renderer
  //

  private renderer!: THREE.WebGLRenderer;

  startRendering() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    })

    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    let component: ExampleComponent = this;
    (function render() {
      requestAnimationFrame(render)
      component.scroll()
      component.animate()
      component.createCamera();
      component.renderer.render(component.scence, component.camera)
    }())
  }

  //
  // Animate
  //

  animate() {
    this.cube.rotation.x += 0.008; this.cube.rotation.y += 0.001;
  }

  ngAfterViewInit() {
    this.createScene();
    this.textureMethod()
    this.startRendering();
  }
}
