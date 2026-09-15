class MinHeap {
    private heap: [number, number][] = [];

    push(item: [number, number]): void {
        this.heap.push(item);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): [number, number] | undefined {
        if (this.heap.length === 0) {
            return undefined;
        }

        const top = this.heap[0];
        const bottom = this.heap.pop()!;

        if (this.heap.length > 0) {
            this.heap[0] = bottom;
            this.bubbleDown(0);
        }

        return top;
    }

    size(): number {
        return this.heap.length;
    }

    toArray(): number[] {
        return this.heap.map(([num]) => num);
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.heap[index][1] >= this.heap[parent][1]) {
                break;
            }

            [this.heap[index], this.heap[parent]] =
                [this.heap[parent], this.heap[index]];

            index = parent;
        }
    }

    private bubbleDown(index: number): void {
        const length = this.heap.length;

        while (true) {
            let smallest = index;

            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (
                left < length &&
                this.heap[left][1] < this.heap[smallest][1]
            ) {
                smallest = left;
            }

            if (
                right < length &&
                this.heap[right][1] < this.heap[smallest][1]
            ) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }
}

class Solution {
    /**
     * @param nums
     * @param k
     * @return
     */
    topKFrequent(nums: number[], k: number): number[] {
        // Count frequencies
        const freqMap = new Map<number, number>();

        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
        }

        // Keep only k most frequent elements
        const minHeap = new MinHeap();

        for (const [num, frequency] of freqMap) {
            minHeap.push([num, frequency]);

            if (minHeap.size() > k) {
                minHeap.pop();
            }
        }

        return minHeap.toArray();
    }
}