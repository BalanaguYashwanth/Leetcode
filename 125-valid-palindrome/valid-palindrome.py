class Solution:
    def isPalindrome(self, s: str) -> bool:
        def convert_upper_to_small(s):
            small_sentence = ""
            s = s.lower()
            for char in s:
                if (ord(char) > 96 and ord(char) < 123 )or (ord(char) > 47 and ord(char) < 58) :
                    small_sentence = small_sentence + char
                    
            return small_sentence
        
        def hasStringPalindrome(small_characters):
            is_palindrome = True
            if len(small_characters)>1:
                for index in range(len(small_characters)):
                    if small_characters[index] != small_characters[(len(small_characters)-1)-index]:
                        is_palindrome = False
                return is_palindrome
            else:
                return is_palindrome
        

        small_characters = convert_upper_to_small(s)
        result = hasStringPalindrome(small_characters)
        return result



