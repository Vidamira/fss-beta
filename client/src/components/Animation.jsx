import React, { useLayoutEffect, useRef } from 'react';
import p5 from 'p5';

const Animation = () => {
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const p = new p5((p) => {

      // p5.js particle animation sketch code

      p.setup = () => {
        p.createCanvas(400, 400);
        for (let i = 0; i < maxNodes; i++) {
          nodes.push(new Node(random(width), random(height)));
        }
        noStroke();
      };

      p.draw = () => {
        p.clear();

        // Draw lines between close nodes
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            let d = dist(nodes[i].pos.x, nodes[i].pos.y, nodes[j].pos.x, nodes[j].pos.y);
            if (d < lineDistance) {
              p.stroke(lineColor);
              p.line(nodes[i].pos.x, nodes[i].pos.y, nodes[j].pos.x, nodes[j].pos.y);
            }
          }
        }

        for (let node of nodes) {
          node.attractToMouse();
          node.update();
          node.display();
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(windowWidth, windowHeight);
      };

      
      class Node {
        constructor(x, y) {
          this.pos = createVector(x, y);
          this.vel = p5.Vector.random2D().mult(random(0.5, nodeSpeed));
        }

        attractToMouse() {
          let mouse = createVector(mouseX, mouseY);
          let dir = p5.Vector.sub(mouse, this.pos);
          let d = dir.mag();
          if (d < mouseInfluenceRadius) {
            let strength = map(d, 0, mouseInfluenceRadius, mouseInfluenceStrength, 0);
            dir.setMag(strength);
            this.vel.add(dir);
          }
        }

        update() {
          this.vel.limit(nodeSpeed); 
          this.pos.add(this.vel);
          
          if (this.pos.x < 0) this.pos.x = width;
          if (this.pos.x > width) this.pos.x = 0;
          if (this.pos.y < 0) this.pos.y = height;
          if (this.pos.y > height) this.pos.y = 0;
        }

        display() {
          p.fill(nodeColor);
          p.ellipse(this.pos.x, this.pos.y, nodeSize);
        }
      }
    }, canvas);

    // Cleanup function to remove p5 animation on unmount

    return () => {
      p.remove();
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} style={{ width: '100%', height: '400px' }} />
    </div>
  );
};

export default Animation;
