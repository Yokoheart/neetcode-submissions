class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const n = position.length;
        if(n === 0) return 0;

        //Pair positions with their speeds and calculate time to target
        const cars = position.map((pos, i) => ({pos, time: (target - pos) / speed[i]})).sort((a,b) => b.pos - a.pos);

        let fleets = 0;
        let maxTime  = 0;

        //Itrate through sorted cars
        for(const car of cars){
            if(car.time > maxTime){
                fleets++;
                maxTime = car.time;
            }
        }
        return fleets;
    }
}
