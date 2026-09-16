class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            // Skip non-alphanumeric characters from left
            while (left < right && !this.isAlphanumeric(s[left])) {
                left++;
            }
            // Skip non-alphanumeric characters from right
            while (left < right && !this.isAlphanumeric(s[right])) {
                right--;
            }

            // Compare lowercase characters
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    private isAlphanumeric(char: string): boolean {
        const code = char.charCodeAt(0);
        return (
            (code >= 48 && code <= 57) ||  // 0-9
            (code >= 65 && code <= 90) ||  // A-Z
            (code >= 97 && code <= 122)    // a-z
        );
    }
}