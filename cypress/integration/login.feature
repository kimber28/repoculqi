Feature: pagina de automation

  abrir un pagina con datos corrector

  @happy
  Scenario: happy login
    Given abrir la pagina automation
    When click en login
    And cliente ingresa su usuario "adminkim@gmail.com" y la contraseña "admin123"
    And cliente click en el boton login
    Then cliente se logea

  @Unhappy
  Scenario: Unhappy login
    Given abrir la pagina automation
    When click en login
    And cliente ingresa su usuario "adminkim@gmail.com" y la contraseña "admin"
    And cliente click en el boton login
    Then cliente no se logea