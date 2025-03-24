import java.util.HashMap;
import java.util.Scanner;

public class AnagramChecker {
    static boolean areAnagrams(String s1, String s2) {
        HashMap<Character, Integer> charCount = new HashMap<>();
        
        for (char ch : s1.toCharArray()) 
            charCount.put(ch, charCount.getOrDefault(ch, 0) + 1);
  
        for (char ch : s2.toCharArray()) 
            charCount.put(ch, charCount.getOrDefault(ch, 0) - 1);
  
        for (var pair : charCount.entrySet()) {
            if (pair.getValue() != 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter first string: ");
        String s1 = scanner.nextLine();
        System.out.print("Enter second string: ");
        String s2 = scanner.nextLine();
        System.out.println(areAnagrams(s1, s2) ? "true" : "false");
        scanner.close();
    }
}
