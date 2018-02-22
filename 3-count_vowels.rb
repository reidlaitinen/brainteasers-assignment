# Write a script that accepts a string as a parameter 
# and counts the number of vowels within the string

def count_vowels(str)
  vowels = ['a','e','i','o','u']
  count = 0
  i = 0
  while i < str.length
    if vowels.include? str[i].downcase
      count += 1
    end
    i += 1
  end
  count
end

puts(count_vowels("count the vowels"))