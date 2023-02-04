from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
import time 

driver = webdriver.Chrome()



driver.get('http://localhost:3000/')
driver.fullscreen_window()
time.sleep(6)
driver.find_element(By.CLASS_NAME,"S9gUrf-YoZ4jf").click()


before = driver.window_handles[0]
window_after = driver.window_handles[1]
driver.switch_to.window(window_after)
time.sleep(6)

email = driver.find_element(By.CSS_SELECTOR,"#identifierId")
email.send_keys("malikakai1212@gmail.com")
driver.find_element(By.CSS_SELECTOR,"#identifierNext > div > button").click()
import time 
time.sleep(6)

password= driver.find_element(By.CSS_SELECTOR,"#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input")
password.send_keys("azerty*123456")
driver.find_element(By.CSS_SELECTOR,"#passwordNext > div > button").click()

time.sleep(6)
driver.switch_to.window(before)
time.sleep(6)
navbar = driver.find_element(By.CSS_SELECTOR,"#search-navbar")
navbar.send_keys('tizi ouzou')
driver.find_element(By.XPATH,"//button[text()='RECHERCHER']").click()

time.sleep(10)