/* PROBLEM - VALIDATE SUBSEQUENCE https://www.algoexpert.io/questions/Validate%20Subsequence*/ 

class Solution {
    constructor(array, sequence,solutionType='one') {
      this.array = array;
      this.sequence = sequence;
      this.solutionType = solutionType
    }

    one() {
        let seqIdx = 0
        // quick checks for edge cases
        if(this.array == this.sequence)
            return true 

        if(this.sequence.length > this.array.length)
            return false

        // loop over main array and increase the sequence index everytime we find a 
        // match with an element in the main array and the current sequence item
        for (let i = 0; i < this.array.length; i++) {
            const element = this.array[i];
            const sequenceItem = this.sequence[seqIdx]
            // we stop looping if we have found all the sequence items
            if (seqIdx === this.sequence.length) break;
            
            if(sequenceItem === element ) 
                seqIdx++
        }

        return seqIdx === this.sequence.length

    }

    two () {
        
        let arrIdx = 0
        let seqIdx = 0
        
        if(this.array == this.sequence)
            return true 

        if(this.sequence.length > this.array.length)
            return false

        // while loop breaks out if either indexes go over the length
        while (arrIdx < this.array.length &&  seqIdx < this.sequence.length ) {
            // if we find a match in main array we up sequence index
            if(this.array[arrIdx] === this.sequence[seqIdx]) {
                seqIdx++
            }
            // add one to arr idx to keep on iterating regardless if we find match
            arrIdx++

        }
        // if the length and sequence index are equal we found all sequence items in array list
        return this.sequence.length === seqIdx
    }
    process() {
        console.log(this.solutionType)
        return this[this.solutionType]()
    }
  }


const { array, sequence } = {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [5, 1, 22, 25, 6, -1, 8, 10, 12]
  };


let solution = new Solution(array,sequence,'one')
// let solution = new Solution(array,sequence,'two')

let process = solution.process()
console.log(process)
