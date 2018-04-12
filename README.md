# Continuous Servo Package for Micro:bit on MakeCode
For use with continuous servos.

## User Guide
[Make a Micro:bit Car](https://tinkercademy.com/tutorials/make-a-microbit-car/) with continuous servos

## Code Example
```JavaScript
basic.forever(() => {
    // one motor at a time
    ContinuousServo.turn_off_motor(AnalogPin.A2)
    ContinuousServo.spin_one_way(AnalogPin.A1)
    basic.pause(500)
    // switch over
    ContinuousServo.turn_off_motor(AnalogPin.A1)
    ContinuousServo.spin_other_way(AnalogPin.A2) // because they're inverted
    basic.pause(500)
})
```

## License
MIT

## Supported targets
for PXT/microbit (The metadata above is needed for package search.)
