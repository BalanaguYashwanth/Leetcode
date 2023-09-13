class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
      if needle in haystack:
        for num in range(len(haystack)):
          start = num 
          end = (num) + len(needle)
          if (start < len(haystack)) and (end <= len(haystack)):
            if haystack[start:end] == needle:
              return start
      else:
        return -1