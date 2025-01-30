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
import { Heart, HeartCrack } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [hideButton, setHideButton] = useState(false);

  const [isYes, setIsYes] = useState(false);

  const onMoveNo = () => {
    setIsYes(false);
    setHideButton(true);
    const randomX = Math.random() * 80 + 10; // Random position between 10% and 90%
    const randomY = Math.random() * 80 + 10;
    setPosition({ top: `${randomY}%`, left: `${randomX}%` });
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
              <Button onClick={onMoveNo} className="w-2/5" variant="outline">
                <HeartCrack /> No
              </Button>)}
          </CardFooter>
        </Card>
        {hideButton && (
          <Button 
            style={{position: "absolute", top: position.top, left: position.left }}
            hidden={!hideButton} 
            onClick={onMoveNo} 
            className="w-[150px]" 
            variant="outline">
            <HeartCrack /> No
          </Button>)
        }
      </main>
      <footer className="row-start-3 flex-col flex gap-6 flex-wrap items-center justify-center">
        <p>Created by Tylah Kapa</p>
        <a href="https://www.kapa.dev">kapa.dev</a>
      </footer>
    </div>
  );
}
