# Write a script that checks whether a passed string is palindrome or not. 
# A palindrome is word, phrase, or sequence that reads the same backward 
# as forward, e.g., madam or nurses run. 
# Make sure to take care of spaces and capital letters.


def palindrome(str)
  str.downcase.delete(' ') == str.reverse.downcase.delete(' ')
end

puts(palindrome("racecar"))
puts(palindrome("racecars"))