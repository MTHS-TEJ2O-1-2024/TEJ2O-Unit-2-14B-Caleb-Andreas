"""
Created by: Caleb Andreas
Created on: Nov 2024
This module is a Micro:bit MicroPython program that makes 
a sprite go around the perimeter.
"""

from microbit import *
from time import sleep


# Variables
countY = number = 0
countX = number = 0

# Cleanup
display.clear()
display.show(Image.HAPPY)

while True:
    # On A button pressed do loop clockwise.
    if button_a.is_pressed():
        display.clear
        countX = 0
        countY = 0

        # Move sprite to top right.
        while countY == 0:
            display.clear()
            display.set_pixel(countX, countY, 9)
            countX = countX + 1
            sleep(0.2)
            # Move down to get out of loop.
            if countX == 4:
                display.clear()
                display.set_pixel(countX, countY, 9)
                countY = countY + 1
                sleep(0.2)
        
        # Move sprite to bottom right.
        while countX == 4:
            display.clear()
            display.set_pixel(countX, countY, 9)
            countY = countY + 1
            sleep(0.2)
            # Move left to get out of loop.
            if countY == 4:
                display.clear()
                display.set_pixel(countX, countY, 9)
                countX = countX - 1
                sleep(0.2)
        
        # Move sprite to bottom left.
        while countY == 4:
            display.clear()
            display.set_pixel(countX, countY, 9)
            countX = countX + 1
            sleep(0.2)
            # Move left to get out of loop.
            if countX == 0:
                display.clear()
                display.set_pixel(countX, countY, 9)
                countY = countY - 1
                sleep(0.2)
