from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

# Initialize the Chrome driver
driver = webdriver.Chrome()


import time 


url = 'https://accounts.google.com/gsi/select?client_id=309969578058-djuekces314halkds6uofbht02himl4o.apps.googleusercontent.com&ux_mode=popup&ui_mode=card&as=kb15qgTpKItColbp7pkGfw&channel_id=ca3d051d4fb43ed05249674e3731606faacd37a36626c8759476d7ac7721b5bb&origin=http%3A%2F%2Flocalhost%3A3000'
driver.get('http://localhost:3000/')
driver.fullscreen_window()
time.sleep(6)
driver.find_element(By.CLASS_NAME,"S9gUrf-YoZ4jf").click()

print(driver.current_url)
before = driver.window_handles[0]
window_after = driver.window_handles[1]
driver.switch_to.window(window_after)
time.sleep(6)
print(driver.current_url)
email = driver.find_element(By.CSS_SELECTOR,"#identifierId")
email.send_keys("ka_hamza@esi.dz")
driver.find_element(By.CSS_SELECTOR,"#identifierNext > div > button").click()
import time 
time.sleep(6)

password= driver.find_element(By.CSS_SELECTOR,"#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input")
password.send_keys("birgrichabdohamza@007gmail")
driver.find_element(By.CSS_SELECTOR,"#passwordNext > div > button").click()

time.sleep(6)
driver.switch_to.window(before)
time.sleep(6)
driver.get('http://localhost:3000/home')
time.sleep(6)


# url = 'https://accounts.google.com/v3/signin/challenge/pwd?TL=ALbfvL0urfKtfX6UNwqbik464zxioxE6EDKSVGrq9Va_efc3Nlgop3iefU5RwQoD&checkConnection=youtube%3A280%3A0&checkedDomains=youtube&cid=1&continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D309969578058-djuekces314halkds6uofbht02himl4o.apps.googleusercontent.com%26ux_mode%3Dpopup%26ui_mode%3Dcard%26as%3DVZ3CQKynD%2FTUMTgZkxa%252BYA%26channel_id%3D4f56824bf05a6ad804eabfce759a612ef31b2be22c13ee012543d5e4401e95e3%26origin%3Dhttp%3A%2F%2Flocalhost%3A3000&dsh=S-1811871449%3A1675546089573225&faa=1&flowEntry=ServiceLogin&flowName=GlifWebSignIn&ifkv=AWnogHdBiDoqADI81rcSU-IYADfb9C8SgFKIqlQxAkB_PEQ6Xh6Y7_yONIX9IxCtXY7nJuzC5dAS5w&pstMsg=1&rip=1'
# WebDriverWait(driver, 150).until(EC.url_changes(url))

# # password= driver.find_element(By.CSS_SELECTOR,"#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input")

# # password.send_keys("birgrichabdohamza@007esigmail")

# driver.find_element(By.CSS_SELECTOR,"#passwordNext > div > button").click()
# WebDriverWait(driver, 100)














# Wait for the iframe to load
# frames = driver.find_element(By.TAG_NAME,"iframe")
# print('lonegur frames loaded : ',len(frames))
# myLink = driver.find_element(By.ID, 'test1')
# myLink.click()

# driver.find_element("link text", "S'inscrire avec Google").click()
# driver.switch_to.frame("result")
# driver.switch_to.frame(driver.find_element_by_css_selector("body>iframe"))
# WebDriverWait(driver, 10)
# driver.find_element_by_css_selector("input.ex2").click()

    # Now, Click on the button


# # Switch to the iframe
# driver.switch_to.frame(iframe)

# # Wait for the Google login button to load
# google_login_button = WebDriverWait(driver, 10).until(
#     EC.presence_of_element_located((By.ID, "google-login-button"))
# )

# # Click the Google login button
# google_login_button.click()

# # Wait for the Google login page to load
# WebDriverWait(driver, 10).until(
#     EC.url_contains("accounts.google.com")
# )

# # Fill in the Google login form and submit
# 
# driver.find_element(By.ID, "identifierNext").click()
# password_input = WebDriverWait(driver, 10).until(
#     EC.presence_of_element_located((By.NAME, "password"))
# )
# password_input.send_keys("your-password")
# driver.find_element(By.ID, "passwordNext").click()

# # Wait for the React app to redirect to the home page
# WebDriverWait(driver, 10).until(
#     EC.url_contains("your-react-app.com/home")
# )

# # Verify that the user is logged in
# assert "Welcome, User" in driver.page_source

# Close the browser
# driver.quit()
