# Write a script that accepts a string as a parameter 
# and converts the first letter of each word of the string in upper case.

def cap_words(str)
  words = str.split(' ')
  new_words = []
  words.each do |word|
    i = 1
    new_word = word[0].upcase
    while i < word.length
      new_word += word[i]
      i += 1
    end
    new_words << new_word
  end
  new_words.join(' ')
end

puts(cap_words("the quick brown fox"))
