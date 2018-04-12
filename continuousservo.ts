/**
 * Custom blocks
 */
//% color=#2b569b weight=10 icon="\uf1b9"
namespace ContinuousServo {

    let pin1 = AnalogPin.P1
    let pin2 = AnalogPin.P2

    /**
    * Spins the motor in one direction at full speed
    * @param pin1 Which pin the motor is on
    */
    //% blockId=spin_one_way weight=100
    //% block="spin one way pin %pin1"
    export function spin_one_way(pin1: AnalogPin): void {
      pins.servoWritePin(pin1, 180)
    }

    /**
    * Spins the motor in other direction at full speed
    * @param pin2 Which pin the motor is on
    */
    //% blockId=spin_other_way weight=80
    //% block="spin other way pin %pin2"
    export function spin_other_way(pin2: AnalogPin): void {
      pins.servoWritePin(pin2, 0)
    }

    /**
    * Spins the motor in one direction, with a speed from 0 to 100
    * @param pin1 Which pin the motor is on
    * @param speed Speed from 0 to 100
    */
    //% blockId=spin_one_way_with_speed weight=60
    //% block="spin one way pin %pin1 | with speed %speed"
    //% speed.min=0 speed.max=100
    export function spin_one_way_with_speed(pin1: AnalogPin, speed: number): void {
      let spin = (speed / 100 * 90) + 90
      pins.servoWritePin(pin1, spin)
    }

    /**
    * Spins the motor in the other direction, with a speed from 0 to 100
    * @param pin2 Which pin the motor is on
    * @param speed Speed from 0 to 100
    */
    //% blockId=spin_other_way_with_speed weight=40
    //% block="spin other way pin %pin2 | with speed %speed"
    //% speed.min=0 speed.max=100
    export function spin_other_way_with_speed(pin2: AnalogPin, speed: number): void {
      let spin = 90 - (speed / 100 * 90)
      pins.servoWritePin(pin2, spin)
    }

    /**
    * Turns off the motor at this pin
    * @param pin1 Which pin the motor is on
    */
    //% blockId=turn_off_motor weight=20
    //% block="turn off motor at pin %pin"
    export function turn_off_motor(pin1: DigitalPin): void {
      pins.digitalWritePin(pin1, 0)
    }


}
