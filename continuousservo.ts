/**
 * Custom blocks
 */
//% color=#2b569b weight=10 icon="\uf1b9"
namespace ContinuousServo {

    let pin = AnalogPin.P1

    /**
    * Spins the motor in one direction at full speed
    * @param pin Which pin the motor is on
    */
    //% blockId=spin_one_way weight=100
    //% block="spin one way pin %pin"
    export function spin_one_way(pin: AnalogPin): void {
      pins.servoWritePin(pin, 180)
    }

    /**
    * Spins the motor in other direction at full speed
    * @param pin Which pin the motor is on
    */
    //% blockId=spin_other_way weight=80
    //% block="spin other way pin %pin"
    export function spin_other_way(pin: AnalogPin): void {
      pins.servoWritePin(pin, 0)
    }

    /**
    * Spins the motor in one direction, with a speed from 0 to 100
    * @param pin Which pin the motor is on
    * @param speed Speed from 0 to 100
    */
    //% blockId=spin_one_way_with_speed weight=60
    //% block="spin one way pin %pin | with speed %speed"
    //% speed.min=0 speed.max=100
    export function spin_one_way_with_speed(pin: AnalogPin, speed: number): void {
      let spin = (speed / 100 * 90) + 90
      pins.servoWritePin(pin, spin)
    }

    /**
    * Spins the motor in the other direction, with a speed from 0 to 100
    * @param pin Which pin the motor is on
    * @param speed Speed from 0 to 100
    */
    //% blockId=spin_other_way_with_speed weight=40
    //% block="spin other way pin %pin | with speed %speed"
    //% speed.min=0 speed.max=100
    export function spin_other_way_with_speed(pin: AnalogPin, speed: number): void {
      let spin = 90 - (speed / 100 * 90)
      pins.servoWritePin(pin, spin)
    }

    /**
    * Turns off the motor at this pin
    * @param pin Which pin the motor is on
    */
    //% blockId=turn_off_motor weight=20
    //% block="turn off motor at pin %pin"
    export function turn_off_motor(pin: DigitalPin): void {
      pins.digitalWritePin(pin, 0)
    }


}
