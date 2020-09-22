
/**
 * Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
 * Weitere Informationen unter https://makecode.microbit.org/blocks/custom
 */



/**
 * Benutzerdefinierte Blöcke
 */
//% weight=100 color=#0fbc11 icon="\uf021"
namespace servos {
     /**
     * Setzt den Winkel des Servos
     * @param pin Pin wo der Motor angeängt ist
     * @param grad gewünschter Winkel des Motors
     */
    
    //% blockId=servossetangle block="setze Winkel von Servo an %servo auf %degrees °"
    //% degrees.defl=0
    //% degrees.min=-70 degrees.max=70
    export function setAngle(pin: AnalogPin,  degrees: number ): void {
        const duration = Math.map(Math.clamp(-70, 70, degrees), -70, 70, 111, 42);
        pins.analogWritePin(pin, duration)
    }
    

     /**
     * Setzt Geschwindigkeit des Servos
     * @param pin Pin wo der Motor angeängt ist
     * @param speed gewünschte Geschwindigkeit des Motors
     */
    
    //% blockId=servossetSpeed block="setze Geschwindigkeit von Servo an %servo auf %speed=speedPicker %"
    //% speed.defl=0
    //% speed.min=-100
    //% speed.max=100
    export function setSpeed(pin: AnalogPin,  speed: number ): void {
        const duration = Math.map(speed, -100, 100, 67, 87);
        pins.analogWritePin(pin, duration)
        //pins.analogSetPeriod(pin, 20000)
    }
}
