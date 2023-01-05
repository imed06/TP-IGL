from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

PATH ="C:\Program Files (x86)\chromedriver.exe"
driver  = webdriver.Chrome(PATH)
driver.get("https://www.techwithtim.net")

link = driver.find_element(By.LINK_TEXT,"Django Tutorial")

time.sleep(5)

link.click()