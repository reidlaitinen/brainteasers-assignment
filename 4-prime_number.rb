# Write a script that accepts a number as a parameter and check the number is prime or not

def is_prime(num)
  i = 2.0
  while i <= num / 2.0
    if (num.to_f / i.to_f) % 1.0 == 0.0
      return false
    else
      i += 1.0
    end
  end
  return true
end

(1..100).map {|n| puts("#{n}: #{is_prime(n)}")}