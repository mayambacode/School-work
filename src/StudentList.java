
public class StudentList {

		public static void main (String []args) {
			
			Student [] studentList = new Student[5];
			studentList [0] = new Student ("Superman", "007");
			studentList [1] = new Student ("James Bond", "700");
			studentList [2] = new Student ("Wonder Woman","100");
			studentList [3] = new Student ("Batman", "001");
			studentList [4] = new Student ("Joker", "002");
			// the for each loop iterates over a list of Objects
		for(Student s: studentList) {
			System.out.println(s.getName());
		}
   }
}