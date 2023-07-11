package account;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * Servlet implementation class Profile
 */
@WebServlet("/Profile")
public class Profile extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Profile() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub  
		Cookie[] ck=request.getCookies();
		
		if(ck!=null && ck[0].getName().equals("name")) {
			RequestDispatcher rd=request.getRequestDispatcher("account.jsp");
			rd.include(request, response);	
		}
		
		else {
			request.setAttribute("error", "Please login first");
			RequestDispatcher rd=request.getRequestDispatcher("login.jsp");
			rd.include(request, response);
		}
	}
	


}

