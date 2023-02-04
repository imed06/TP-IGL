# Import the necessary packages
from selenium import webdriver
import unittest

class TestGoogleLogin(unittest.TestCase):
    def setUp(self):
        # Create a new instance of the Chrome driver
        self.driver = webdriver.Chrome()

    def test_login_with_google(self):
        # Navigate to the login page
        self.driver.get("http://localhost:3000")
        
        # Find and click the Google login button
        # google_login_button = self.driver.find_element('id',"container")
        # google_login_button.click()
        self.driver.switch_to().frame("gsi_471539_24182")

        # # Switch to the new window that opens for the Google login process
        # self.driver.switch_to.window(self.driver.window_handles[1])

        # # Enter the Google login credentials
        # email = self.driver.find_element_by_id("identifierId")
        # email.send_keys("testuser@gmail.com")
        # next_button = self.driver.find_element_by_id("identifierNext")
        # next_button.click()

        # password = self.driver.find_element_by_name("password")
        # password.send_keys("password")
        # next_button = self.driver.find_element_by_id("passwordNext")
        # next_button.click()

        # # Switch back to the main window
        # self.driver.switch_to.window(self.driver.window_handles[0])

        # # Check if the user is redirected to the home page
        # self.assertIn("http://localhost:3000/home", self.driver.current_url)

    def tearDown(self):
        # Close the browser window
        self.driver.quit()

if __name__ == '__main__':
    unittest.main()
