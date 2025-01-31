"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Heart, HeartCrack, Rss } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [hideButton, setHideButton] = useState(false);

  const [isYes, setIsYes] = useState(false);

  const onMoveNo = () => {
    setIsYes(false);
    setHideButton(true);

    const container = document.documentElement;
    const maxX = container.clientWidth - 100;
    const maxY = container.clientHeight - 50;
    const bufferX = maxX * 0.1; // 10% buffer
    const bufferY = maxY * 0.1;
    const centerX = maxX / 2;
    const centerY = maxY / 2;
    
    const minDistance = 100;
    const maxDistance = 300;
    
    let deltaX = Math.random() * (maxDistance - minDistance) + minDistance;
    let deltaY = Math.random() * (maxDistance - minDistance) + minDistance;
    
    // Randomize direction
    deltaX *= Math.random() > 0.5 ? 1 : -1;
    deltaY *= Math.random() > 0.5 ? 1 : -1;
    
    let newX = parseFloat(position.left) * (maxX / 100) + deltaX;
    let newY = parseFloat(position.top) * (maxY / 100) + deltaY;
    
    // Bias movement towards the center
    newX = (newX + centerX) / 2;
    newY = (newY + centerY) / 2;

    newX = Math.max(bufferX, Math.min(newX, maxX - bufferX));
    newY = Math.max(bufferY, Math.min(newY, maxY - bufferY));

    setPosition({ top: `${(newY / maxY) * 100}%`, left: `${(newX / maxX) * 100}%` });
  }

  const onYes = () => setIsYes(true);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Card>
          <CardHeader>
            <CardTitle>Will you be my Valentine?</CardTitle>
            <CardDescription>{"{{ Your Description }}"}</CardDescription>
          </CardHeader>
          <CardContent>
            {
              isYes ? 
              (<p>{"{{ Text for when they say YES}}"}</p>) :
              (<p>{"{{ Initial Text/When they say NO}}"}</p>)
            }
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={onYes} className="w-2/5">
              <Heart fill="#fff" /> Yes
            </Button>
            {!hideButton && (
              <Button onClick={onMoveNo} 
                onPointerEnter={onMoveNo} 
                className="w-2/5" variant="outline">
                <HeartCrack /> No
              </Button>)}
          </CardFooter>
        </Card>
        {hideButton && (
          <Button 
            style={{position: "absolute", top: position.top, left: position.left }}
            hidden={!hideButton} 
            onClick={onMoveNo} 
            onPointerEnter={onMoveNo} 
            className="w-[150px]" 
            variant="outline">
            <HeartCrack /> No
          </Button>)
        }
      </main>
      <footer className="row-start-3 flex-col flex gap-6 flex-wrap items-center justify-center">
        <p>Created by Tylah Kapa</p>
        <div className="flex">
          <a href="https://www.kapa.dev">        
            <Button variant="link" size="lg">
              <Rss />
            </Button>
          </a>
          <a href="https://github.com/tkapa/wybmv">
            <Button variant="link" size="lg">
              <Github />
            </Button>
          </a>
        </div>
      </footer>
    </div>
  );
}
