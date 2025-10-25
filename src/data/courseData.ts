import { Part, SectionType } from '../types';

export const courseData: Part[] = [
  {
    id: 'p0',
    title: { en: 'Introduction', vi: 'Giới thiệu' },
    lessons: [
      {
        id: '0.1',
        title: { en: 'Welcome to the Hub', vi: 'Chào mừng' },
        sections: [
          {
            type: SectionType.GUIDE,
            title: { en: "How to Use This Guide", vi: "Hướng dẫn sử dụng" },
            content: [
              { en: "Start-up: Opens the topic, activating prior knowledge.", vi: "Khởi động: Gợi mở vấn đề, kích hoạt kiến thức đã có." },
              { en: "Knowledge Formation: Discover new concepts through examples and experiments.", vi: "Hình thành kiến thức: Khám phá khái niệm mới qua ví dụ/nghiệm thử." },
              { en: "Practice: Short, hands-on exercises to reinforce key concepts.", vi: "Luyện tập: Thực hành ngắn, củng cố trọng tâm." },
              { en: "Application: Apply knowledge to near-real-world scenarios.", vi: "Vận dụng: Áp dụng vào tình huống gần với thực tế." },
              { en: "Expansion & Did you know?: Suggestions for further experiments, interesting facts, and safety warnings.", vi: "Mở rộng & Em có biết?: Gợi ý thí nghiệm, sự thật thú vị, cảnh báo an toàn." },
            ]
          },
          {
            type: SectionType.TOC,
            title: { en: 'Table of Contents', vi: 'Mục lục' },
            content: [
              { en: 'Part 1: Foundational Knowledge', vi: 'Phần 1: Kiến thức nền tảng' },
              { en: '1.1 Lesson 1: Getting Started with Arduino & IDE', vi: '1.1 Bài 1: Làm quen Arduino và IDE' },
              { en: '1.2 Lesson 2: Program Structure & Advanced Blink', vi: '1.2 Bài 2: Cấu trúc chương trình và Blink nâng cao' },
              { en: '1.3 Lesson 3: Buttons, Debouncing & LED Control', vi: '1.3 Bài 3: Nút nhấn, chống dội và điều khiển LED' },
              { en: '1.4 Lesson 4: ADC & LM35 Temperature Sensor', vi: '1.4 Bài 4: ADC và cảm biến nhiệt độ LM35' },
              { en: '1.5 Lesson 5: LCD I2C 1602 & Displaying Data', vi: '1.5 Bài 5: LCD I2C 1602 và hiển thị dữ liệu' },
              { en: 'Part 2: Advanced Techniques & Communication', vi: 'Phần 2: Kĩ thuật nâng cao và truyền thông' },
              { en: '2.1 Lesson 6: PWM, LED Brightness & Buzzer', vi: '2.1 Bài 6: PWM, độ sáng LED và buzzer' },
              { en: '2.2 Lesson 7: DC Motor & L298N Driver', vi: '2.2 Bài 7: Động cơ DC và driver L298N' },
              { en: '2.3 Lesson 8: Servo SG90', vi: '2.3 Bài 8: Servo SG90' },
              { en: '2.4 Lesson 9: Advanced I2C Communication', vi: '2.4 Bài 9: Giao tiếp I2C nâng cao' },
              { en: '2.5 Lesson 10: Interrupts and Timers', vi: '2.5 Bài 10: Ngắt và Timer' },
              { en: 'Part 3: Practical Projects', vi: 'Phần 3: Dự án thực tế' },
              { en: '3.1 Project A: Smart Traffic Light (FSM, non-blocking)', vi: '3.1 Dự án A: Đèn giao thông thông minh (FSM, không chặn)' },
              { en: '3.2 Project B: Temperature Alarm (Hysteresis + LCD)', vi: '3.2 Dự án B: Cảnh báo nhiệt độ (hysteresis + LCD)' },
              { en: '3.3 Project C: Mini Smart Home (BT + Relay + Auto)', vi: '3.3 Dự án C: Nhà thông minh mini (BT + Relay + Auto)' },
              { en: '3.4 Project D: Obstacle Avoiding Robot (HC-SR04 + L298N)', vi: '3.4 Dự án D: Robot tránh vật cản (HC-SR04 + L298N)' },
              { en: 'Part 4: Exercises', vi: 'Phần 4: Bài tập' },
              { en: 'Part 5: Appendix', vi: 'Phần 5: Phụ lục' },
            ]
          },
        ]
      }
    ]
  },
  {
    id: 'p1',
    title: { en: 'Part 1: Foundational Knowledge', vi: 'Phần 1: Kiến thức nền tảng' },
    lessons: [
      {
        id: '1.1',
        title: { en: 'Lesson 1: Getting Started with Arduino & IDE', vi: 'Bài 1: Làm quen Arduino và IDE' },
        sections: [
          { type: SectionType.OBJECTIVE, content: [{ en: 'Describe the components of the Arduino ecosystem (board, IDE, libraries).', vi: 'Nêu được thành phần hệ sinh thái Arduino (board, IDE, thư viện).' }, { en: 'Identify the main I/O pins on an Uno/Nano; explain PWM, ADC at a basic level.', vi: 'Nhận biết chân I/O chính trên Uno/Nano; giải thích PWM, ADC ở mức cơ bản.' }, { en: 'Install the Arduino IDE, select the correct Board and Port, and upload the Blink example sketch.', vi: 'Cài đặt Arduino IDE, chọn đúng Board và Port, nạp chương trình mẫu Blink.' }] },
          { type: SectionType.WARMUP, content: { en: 'Observe a set of LEDs blinking in a cycle. How can we "command" the lights to blink as we wish?', vi: 'Quan sát một bó đèn LED hoạt động theo chu kì. Theo em, làm sao để “ra lệnh” cho đèn nhấp nháy theo ý muốn?' } },
          { type: SectionType.KNOWLEDGE, title: { en: '1) What is Arduino?', vi: '1) Arduino là gì?' }, content: [{ en: 'Development Board: e.g., Arduino Uno/Nano using the ATmega328P microcontroller (16 MHz, 32 KB Flash, 2 KB SRAM).', vi: 'Board phát triển: ví dụ Arduino Uno/Nano dùng vi điều khiển ATmega328P (16 MHz, 32 KB Flash, 2 KB SRAM).' }, { en: 'IDE (Integrated Development Environment): a platform to write, compile, and upload code; manages libraries (Library Manager).', vi: 'IDE: môi trường viết, biên dịch, nạp mã; quản lí thư viện (Library Manager).' }] },
          { type: SectionType.KNOWLEDGE, title: { en: '2) Pin Functions (Uno/Nano):', vi: '2) Chân chức năng (Uno/Nano):' }, content: [{ en: 'Digital D0-D13 (PWM: D3, D5, D6, D9, D10, D11).', vi: 'Digital D0-D13 (PWM: D3, D5, D6, D9, D10, D11).' }, { en: 'Analog A0-A5 (10-bit ADC, 5V default reference).', vi: 'Analog A0-A5 (ADC 10-bit, mặc định tham chiếu 5 V).' }, { en: 'UART: D0 (RX), D1 (TX). I2C: A4 (SDA), A5 (SCL). SPI: D10-D13.', vi: 'UART: D0 (RX), D1 (TX). I2C: A4 (SDA), A5 (SCL). SPI: D10-D13.' }] },
          { type: SectionType.KNOWLEDGE, title: { en: '3) Setting up the IDE and trying Blink:', vi: '3) Cài đặt IDE và thử Blink:' }, content: [{ en: '1. Download IDE from arduino.cc; install CH340 driver if using a Nano clone.', vi: '1. Tải IDE từ arduino.cc; cài driver CH340 nếu dùng Nano clone.' }, { en: '2. Tools → Board: Arduino Uno/Nano; Port: select the COM/tty port.', vi: '2. Tools → Board: Arduino Uno/Nano; Port: chọn cổng COM/tty.' }, { en: '3. File → Examples → 01.Basics → Blink → Upload.', vi: '3. File → Examples → 01.Basics → Blink → Upload.' }] },
          { type: SectionType.PRACTICE, content: { en: 'Connect an LED with a 220 Ω resistor to D13 (or D7). Try changing delay(1000) to 200 ms and 2000 ms. Observe the change.', vi: 'Nối LED với điện trở 220 Ω vào D13 (hoặc D7). Thử đổi delay(1000) thành 200 ms và 2000 ms. Quan sát sự thay đổi.' } },
          { type: SectionType.APPLICATION, content: { en: 'Describe a quick check process when the COM port is not visible in the IDE. Hint: cable, driver, device permissions, different USB port.', vi: 'Hãy mô tả quy trình kiểm tra nhanh khi không thấy cổng COM trong IDE. Gợi ý: cáp, driver, quyền thiết bị, cổng USB khác.' } },
          { type: SectionType.DID_YOU_KNOW, content: { en: 'PWM does not create a "true analog voltage" but a square wave with varying pulse width. Inertial loads like LEDs/motors will "perceive" the average level.', vi: 'PWM không tạo ra “điện áp analog thật” mà là xung vuông có độ rộng xung thay đổi. Tải quán tính như LED/động cơ sẽ “cảm nhận” mức trung bình.' } },
          { type: SectionType.SUMMARY, content: { en: 'Understand the components of the Arduino ecosystem, the basic pinout, and the process to install and upload the first Blink program.', vi: 'Nắm được thành phần hệ sinh thái Arduino, sơ đồ chân cơ bản, và quy trình cài đặt-nạp chương trình đầu tiên Blink.' } }
        ]
      },
      {
        id: '1.2',
        title: { en: 'Lesson 2: Program Structure & Advanced Blink', vi: 'Bài 2: Cấu trúc chương trình và Blink nâng cao' },
        sections: [
            { type: SectionType.OBJECTIVE, content: [{ en: 'Be able to write the setup() and loop() framework.', vi: 'Viết được khung setup() và loop().' }, { en: 'Use pinMode, digitalWrite, delay, Serial.begin to observe state.', vi: 'Sử dụng pinMode, digitalWrite, delay, Serial.begin để quan sát trạng thái.' }, { en: 'Understand the limitation of delay; know how to replace it with millis() for non-blocking tasks.', vi: 'Hiểu hạn chế của delay; biết thay bằng millis() cho tác vụ không chặn.' }] },
            { type: SectionType.KNOWLEDGE, title: { en: '1) Program Framework:', vi: '1) Khung chương trình:' }, content: [] },
            { type: SectionType.CODE, content: `// Runs once after power-up/reset
void setup() {
  pinMode(13, OUTPUT);
  Serial.begin(9600);
}

// Loops forever
void loop() {
  digitalWrite(13, HIGH);
  Serial.println("LED ON");
  delay(500);
  digitalWrite(13, LOW);
  Serial.println("LED OFF");
  delay(500);
}` },
            { type: SectionType.KNOWLEDGE, title: { en: '2) Non-blocking with millis():', vi: '2) Không chặn với millis():' }, content: [] },
            { type: SectionType.CODE, content: `const int led = 7;
bool ledState = false;
unsigned long previousMillis = 0;
const unsigned long interval = 300;

void setup() { 
  pinMode(led, OUTPUT); 
}

void loop() {
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;
    ledState = !ledState;
    digitalWrite(led, ledState);
  }
}` },
            { type: SectionType.PRACTICE, content: { en: 'Add a second LED with a different interval (e.g., 700 ms). Ensure both LEDs blink independently without using delay.', vi: 'Thêm một LED thứ hai với chu kì khác (ví dụ 700 ms). Đảm bảo cả hai LED nhấp nháy độc lập mà không dùng delay.' } }
        ]
      },
      {
        id: '1.3',
        title: { en: 'Lesson 3: Buttons, Debouncing & LED Control', vi: 'Bài 3: Nút nhấn, chống dội và điều khiển LED' },
        sections: [
          { type: SectionType.OBJECTIVE, content: [{ en: 'Connect a button using INPUT_PULLUP.', vi: 'Kết nối nút nhấn với INPUT_PULLUP.' }, { en: 'Implement reliable software debouncing.', vi: 'Cài đặt debounce phần mềm tin cậy.' }, { en: 'Program an LED to toggle on each button press.', vi: 'Lập trình toggle LED mỗi lần nhấn.' }] },
          { type: SectionType.KNOWLEDGE, title: { en: 'Basic Circuit: Connect the button between GND and D2, enable INPUT_PULLUP for stable logic.', vi: 'Sơ đồ cơ bản: Nút nối GND-D2, bật INPUT_PULLUP để có logic ổn định.' }, content: [] },
          { type: SectionType.CODE, content: `const int buttonPin = 2;
const int ledPin = 7;
bool ledState = false;

unsigned long lastDebounceTime = 0;
unsigned long debounceDelay = 50;
int lastButtonState = HIGH;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int reading = digitalRead(buttonPin);
  if (reading != lastButtonState) {
    lastDebounceTime = millis();
  }

  if ((millis() - lastDebounceTime) > debounceDelay) {
    if (reading == LOW) {
      ledState = !ledState;
      digitalWrite(ledPin, ledState);
      // Wait for button release
      while (digitalRead(buttonPin) == LOW); 
    }
  }
  lastButtonState = reading;
}` },
          { type: SectionType.PRACTICE, content: { en: 'Replace the blocking `while` loop with non-blocking logic using a state variable like "buttonPressed" / "buttonReleased".', vi: 'Thay while chờ nhả bằng logic không chặn dùng trạng thái “đang nhấn/đã nhả”.' } },
          { type: SectionType.APPLICATION, content: { en: 'Design a "door ajar" model: if the door is open for more than 5 seconds, an LED blinks rapidly as a warning (hint: millis(), simple state machine).', vi: 'Thiết kế mô hình “đèn báo cửa”: nếu thời gian mở cửa vượt 5 giây, LED nháy nhanh để cảnh báo (gợi ý: millis(), máy trạng thái đơn giản).' } },
          { type: SectionType.DID_YOU_KNOW, content: { en: 'Hardware debouncing can be done with an RC circuit + Schmitt trigger; however, for human-speed interaction, software is sufficient and flexible.', vi: 'Debounce phần cứng có thể dùng mạch RC + Schmitt trigger; tuy nhiên, với tốc độ con người, phần mềm đủ đáp ứng và linh hoạt.'}},
          { type: SectionType.SUMMARY, content: { en: 'Use INPUT_PULLUP to avoid noise, and debouncing to ensure each button press generates only one "valid" event.', vi: 'Dùng INPUT_PULLUP để tránh nhiễu, và debounce để mỗi lần nhấn chỉ tạo một sự kiện “hợp lệ”.'}}
        ]
      },
      {
        id: '1.4',
        title: { en: 'Lesson 4: ADC & LM35 Temperature Sensor', vi: 'Bài 4: ADC và cảm biến nhiệt độ LM35' },
        sections: [
          { type: SectionType.OBJECTIVE, content: [{ en: 'Read analogRead and convert the value to voltage.', vi: 'Đọc analogRead và quy đổi về điện áp.' }, { en: 'Calculate temperature from the LM35, applying a moving average to reduce noise.', vi: 'Tính nhiệt độ từ LM35, áp dụng trung bình trượt để giảm nhiễu.' }, { en: 'Know how to calibrate the Vref reference.', vi: 'Biết hiệu chuẩn tham chiếu Vref.' }] },
          { type: SectionType.KNOWLEDGE, title: { en: 'Formula: V = (raw / 1023.0) * Vref; T(°C) ≈ V * 100 for LM35.', vi: 'Công thức: V = (raw / 1023.0) * Vref; T(°C) ≈ V · 100 với LM35.' }, content: [] },
          { type: SectionType.CODE, content: `const int pinLM35 = A0;
float Vref = 5.00;

void setup() {
  Serial.begin(9600);
}

void loop() {
  const int numReadings = 10;
  long total = 0;
  for (int i = 0; i < numReadings; i++) {
    total += analogRead(pinLM35);
    delay(5);
  }
  float raw = total / (float)numReadings;
  float voltage = raw * Vref / 1023.0;
  float tempC = voltage * 100.0;
  Serial.print("Voltage = "); Serial.print(voltage, 3);
  Serial.print("V, Temp = "); Serial.print(tempC, 1); Serial.println(" C");
  delay(300);
}` },
          { type: SectionType.APPLICATION, content: { en: 'Set a threshold to turn on a fan at 35°C and turn it off at 33°C (hysteresis) to prevent flickering near the threshold.', vi: 'Đặt ngưỡng bật quạt 35°C, tắt ở 33°C (hysteresis) để tránh chập chờn khi gần ngưỡng.' } },
          { type: SectionType.SUMMARY, content: { en: 'The Uno\'s 10-bit ADC provides a 0–1023 range. The LM35 is easy to use: 10 mV corresponds to 1°C. Measuring the actual Vref improves accuracy.', vi: 'ADC 10-bit của Uno cho dải 0–1023. LM35 dễ dùng: mỗi 10 mV tương ứng 1°C. Đo Vref thực tế giúp kết quả chính xác hơn.' } }
        ]
      },
      {
        id: '1.5',
        title: { en: 'Lesson 5: LCD I2C 1602 & Displaying Data', vi: 'Bài 5: LCD I2C 1602 và hiển thị dữ liệu' },
        sections: [
          { type: SectionType.OBJECTIVE, content: [{ en: 'Scan for the I2C address (usually 0x27 or 0x3F).', vi: 'Quét địa chỉ I2C (0x27 hoặc 0x3F thường gặp).' }, { en: 'Use the LiquidCrystal_I2C library to print strings and position the cursor.', vi: 'Sử dụng thư viện LiquidCrystal_I2C để in chuỗi và định vị con trỏ.' }, { en: 'Display temperature data neatly.', vi: 'Trình bày dữ liệu nhiệt độ gọn gàng.' }] },
          { type: SectionType.KNOWLEDGE, title: { en: 'I2C Scanner (simplified):', vi: 'I2C Scanner (rút gọn):' }, content: [] },
          { type: SectionType.CODE, content: `#include <Wire.h>

void setup() {
  Wire.begin();
  Serial.begin(9600);
  Serial.println("Scanning...");
}

void loop() {
  byte error, address;
  for (address = 1; address < 127; address++) {
    Wire.beginTransmission(address);
    error = Wire.endTransmission();
    if (error == 0) {
      Serial.print("I2C device found at address 0x");
      if (address < 16) Serial.print("0");
      Serial.println(address, HEX);
    }
  }
  delay(5000);
}` },
          { type: SectionType.KNOWLEDGE, title: { en: 'Displaying Temperature:', vi: 'Hiển thị nhiệt độ:' }, content: [] },
          { type: SectionType.CODE, content: `#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
}

void loop() {
  int raw = analogRead(A0);
  float tempC = (raw * 5.0 / 1023.0) * 100.0;
  lcd.setCursor(0, 0);
  lcd.print("Temp: ");
  lcd.print(tempC, 1);
  lcd.print((char)223); // Degree symbol
  lcd.print("C   "); // Clear trailing digits
  delay(500);
}` },
          { type: SectionType.PRACTICE, content: { en: 'Create a "progress bar" to display the temperature level from 0-50°C.', vi: 'Tạo “thanh tiến trình" (progress bar) hiển thị mức nhiệt từ 0-50°C.' } },
          { type: SectionType.SUMMARY, content: { en: 'I2C simplifies LCD wiring to just 4 wires: VCC, GND, SDA, SCL. Remember to check the address before programming.', vi: 'I2C đơn giản hoá dây nối LCD còn 4 dây: VCC, GND, SDA, SCL. Nhớ kiểm tra địa chỉ trước khi lập trình.' } }
        ]
      },
    ]
  },
  {
    id: 'p2',
    title: { en: 'Part 2: Advanced Techniques', vi: 'Phần 2: Kĩ thuật nâng cao' },
    lessons: [
       {
        id: '2.1',
        title: { en: 'Lesson 6: PWM, LED Brightness & Buzzer', vi: 'Bài 6: PWM, độ sáng LED và buzzer' },
        sections: [
          { type: SectionType.OBJECTIVE, content: [{ en: 'Control LED brightness using analogWrite.', vi: 'Điều khiển độ sáng LED qua analogWrite.' }, { en: 'Generate simple melodies with a buzzer (using PWM or tone()).', vi: 'Phát giai điệu đơn giản bằng buzzer (PWM hoặc tone()).' }] },
          { type: SectionType.KNOWLEDGE, title: { en: 'LED dimmer:', vi: 'LED dimmer:' }, content: [] },
          { type: SectionType.CODE, content: `const int ledPin = 9; // A PWM pin
void setup() { 
  pinMode(ledPin, OUTPUT); 
}
void loop() {
  for (int v = 0; v <= 255; v += 5) { analogWrite(ledPin, v); delay(10); }
  for (int v = 255; v >= 0; v -= 5) { analogWrite(ledPin, v); delay(10); }
}` },
          { type: SectionType.KNOWLEDGE, title: { en: 'Buzzer with tone():', vi: 'Buzzer với tone():' }, content: [] },
          { type: SectionType.CODE, content: `const int buzzerPin = 8;
void setup() { }
void loop() {
  tone(buzzerPin, 1000, 300); // 1kHz for 300ms
  delay(500);
  tone(buzzerPin, 1500, 300);
  delay(700);
}` },
          { type: SectionType.DID_YOU_KNOW, content: { en: 'tone() uses a hardware timer to generate a square wave; avoid using it on the same timer pins as PWM when playing music.', vi: 'tone() dùng bộ định thời để tạo xung; tránh dùng chung chân với PWM khác khi thử nhạc.' } }
        ]
      },
      {
        id: '2.2',
        title: { en: 'Lesson 7: DC Motor & L298N Driver', vi: 'Bài 7: Động cơ DC và driver L298N' },
        sections: [
          { type: SectionType.OBJECTIVE, content: [{ en: 'Safely wire an L298N module: separate motor power, common GND.', vi: 'Lắp mạch L298N an toàn: nguồn động cơ tách biệt, GND chung.' }, { en: 'Control direction and speed using IN1/IN2 and ENA (PWM).', vi: 'Điều khiển chiều và tốc độ bằng IN1/IN2 và ENA (PWM).' }] },
          { type: SectionType.KNOWLEDGE, title: { en: 'DC Motor Control', vi: 'Điều khiển động cơ DC' }, content: [] },
          { type: SectionType.CODE, content: `const int IN1 = 8, IN2 = 9, ENA = 10;

void setup() {
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(ENA, OUTPUT);
}

void setMotor(int speed) { // speed from -255 to 255
  if (speed >= 0) {
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    analogWrite(ENA, speed);
  } else {
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
    analogWrite(ENA, -speed);
  }
}

void loop() {
  setMotor(200); delay(2000);
  setMotor(0); delay(500);
  setMotor(-180); delay(2000);
}` },
          { type: SectionType.EXPANSION, content: { en: 'Implement soft-start: gradually increase the PWM value in steps to reduce inrush current.', vi: 'Bổ sung soft start: tăng dần giá trị PWM theo bậc thang để giảm dòng khởi động.' } },
        ]
      },
       {
        id: '2.3',
        title: { en: 'Lesson 8: Servo SG90', vi: 'Bài 8: Servo SG90' },
        sections: [
          { type: SectionType.OBJECTIVE, content: [{ en: 'Control servo angle using the Servo library.', vi: 'Điều khiển góc servo bằng thư viện Servo.' }, { en: 'Explain why multiple servos need a separate power source (voltage drop, noise).', vi: 'Giải thích vì sao nhiều servo cần nguồn riêng (sụt áp, nhiễu).' }] },
          { type: SectionType.KNOWLEDGE, content: []},
          { type: SectionType.CODE, content: `#include <Servo.h>
Servo myServo;

void setup() {
  myServo.attach(3); // Attaches the servo on pin 3
}

void loop() {
  for (int pos = 0; pos <= 180; pos += 1) { myServo.write(pos); delay(15); }
  for (int pos = 180; pos >= 0; pos -= 1) { myServo.write(pos); delay(15); }
}`},
          { type: SectionType.WARNING, content: { en: 'Do not power a servo directly from the Arduino\'s 5V USB pin under heavy load; use a separate 5V power supply with a common GND.', vi: 'Không cấp nguồn servo trực tiếp từ 5V USB của Arduino khi tải nặng; dùng nguồn 5V riêng và GND chung.'}}
        ]
      },
       {
        id: '2.4',
        title: { en: 'Lesson 9: Advanced I2C', vi: 'Bài 9: Giao tiếp I2C nâng cao' },
        sections: [
          { type: SectionType.OBJECTIVE, content: [{ en: 'Understand the I2C bus topology (SDA, SCL, pull-up resistors).', vi: 'Hiểu về cấu trúc bus I2C (SDA, SCL, điện trở kéo lên).' }, { en: 'Connect and communicate with multiple I2C devices on the same bus.', vi: 'Kết nối và giao tiếp với nhiều thiết bị I2C trên cùng một bus.' }] },
          { type: SectionType.KNOWLEDGE, title: { en: 'Multi-device I2C', vi: 'I2C đa thiết bị' }, content: {en: 'The I2C protocol allows multiple slave devices to be connected to a single master. Each device must have a unique address. The master initiates communication by sending the address of the desired slave device.', vi: 'Giao thức I2C cho phép nhiều thiết bị phụ (slave) kết nối với một thiết bị chủ (master). Mỗi thiết bị phải có một địa chỉ duy nhất. Master bắt đầu giao tiếp bằng cách gửi địa chỉ của slave mong muốn.'} },
          { type: SectionType.CODE, content: `#include <Wire.h>
#include <LiquidCrystal_I2C.h> // For an LCD at 0x27
// Assume another sensor, e.g., a BME280, is at address 0x76

LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  Wire.begin();
  lcd.init();
  lcd.backlight();
  Serial.begin(9600);
}

void loop() {
  // Communicate with LCD at 0x27
  lcd.setCursor(0, 0);
  lcd.print("Talking to LCD");

  // Communicate with another sensor at 0x76
  Wire.beginTransmission(0x76);
  Wire.write(0xD0); // Example: request chip ID from BME280
  Wire.endTransmission();
  Wire.requestFrom(0x76, 1);
  if (Wire.available()) {
    byte id = Wire.read();
    Serial.print("Sensor ID: 0x");
    Serial.println(id, HEX);
  }
  
  delay(2000);
}`},
          { type: SectionType.DID_YOU_KNOW, content: { en: 'Some I2C devices have configurable addresses, often set by soldering jumpers or pulling a specific pin HIGH or LOW. This helps resolve address conflicts.', vi: 'Một số thiết bị I2C có địa chỉ cấu hình được, thường bằng cách hàn các cầu nối hoặc kéo một chân cụ thể lên HIGH hoặc xuống LOW. Điều này giúp giải quyết xung đột địa chỉ.'}}
        ]
      },
       {
        id: '2.5',
        title: { en: 'Lesson 10: Interrupts and Timers', vi: 'Bài 10: Ngắt và Timer' },
        sections: [
          { type: SectionType.OBJECTIVE, content: [{ en: 'Understand what an interrupt is and why it is useful for time-critical tasks.', vi: 'Hiểu ngắt là gì và tại sao nó hữu ích cho các tác vụ đòi hỏi phản ứng nhanh.' }, { en: 'Use attachInterrupt() to handle external events like a button press.', vi: 'Sử dụng attachInterrupt() để xử lý các sự kiện bên ngoài như nhấn nút.' }, { en: 'Recognize the role of hardware timers in Arduino.', vi: 'Nhận biết vai trò của các bộ định thời (timer) phần cứng trong Arduino.' }] },
          { type: SectionType.KNOWLEDGE, title: { en: 'External Interrupts', vi: 'Ngắt ngoài' }, content: {en: 'Interrupts allow the microcontroller to pause its current task, execute a special function (Interrupt Service Routine or ISR), and then resume its original task. This is much faster and more reliable for catching brief events than polling in the main loop.', vi: 'Ngắt cho phép vi điều khiển tạm dừng công việc hiện tại, thực thi một hàm đặc biệt (Trình phục vụ ngắt - ISR), và sau đó quay lại công việc ban đầu. Điều này nhanh và đáng tin cậy hơn nhiều để bắt các sự kiện ngắn so với việc kiểm tra liên tục trong vòng lặp chính.'} },
          { type: SectionType.CODE, content: `const int interruptPin = 2; // On Uno, interrupts are on pins 2 and 3
volatile bool ledState = false;
const int ledPin = 13;

// Interrupt Service Routine (ISR)
void toggle() {
  ledState = !ledState;
}

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(interruptPin, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(interruptPin), toggle, FALLING);
}

void loop() {
  // The main loop can be doing other things.
  // The ISR will handle the LED toggle independently.
  digitalWrite(ledPin, ledState);
}`},
          { type: SectionType.WARNING, content: { en: 'Keep ISRs very short and fast. Avoid using delay(), Serial.print(), or anything that depends on other interrupts inside an ISR. Variables shared between an ISR and the main code should be declared as `volatile`.', vi: 'Giữ cho các ISR rất ngắn và nhanh. Tránh sử dụng delay(), Serial.print(), hoặc bất cứ thứ gì phụ thuộc vào các ngắt khác bên trong một ISR. Các biến được chia sẻ giữa ISR và mã chính nên được khai báo là `volatile`.'}}
        ]
      }
    ]
  },
  {
    id: 'p3',
    title: { en: 'Part 3: Practical Projects', vi: 'Phần 3: Dự án thực tế' },
    lessons: [
       {
        id: '3.1',
        title: { en: 'Project A: Smart Traffic Light', vi: 'Dự án A: Đèn giao thông thông minh' },
        sections: [
          { type: SectionType.OBJECTIVE, content: [{ en: 'Design a finite state machine for a three-phase Red-Green-Yellow light cycle.', vi: 'Thiết kế máy trạng thái hữu hạn cho ba pha Đỏ-Xanh-Vàng.' }, { en: 'Handle a pedestrian button press to safely shorten the Green phase.', vi: 'Xử lí nút người đi bộ rút ngắn pha Xanh an toàn.'}]},
          { type: SectionType.KNOWLEDGE, title: { en: 'Traffic Light Finite State Machine (FSM)', vi: 'FSM cho đèn giao thông' }, content: { en: 'The system has three states: RED, GREEN, YELLOW. It transitions from one state to the next based on timers. A pedestrian button can interrupt the GREEN state (after a minimum duration) to switch to YELLOW sooner.', vi: 'Hệ thống có ba trạng thái: ĐỎ, XANH, VÀNG. Nó chuyển từ trạng thái này sang trạng thái tiếp theo dựa trên bộ đếm thời gian. Nút dành cho người đi bộ có thể ngắt trạng thái XANH (sau một khoảng thời gian tối thiểu) để chuyển sang VÀNG sớm hơn.'}},
          { type: SectionType.CODE, content: `enum State {RED, GREEN, YELLOW};
State currentState = RED;
unsigned long stateEnterTime = 0;
const int ledR = 4, ledY = 5, ledG = 6, btn = 2;
const unsigned long RED_TIME = 5000, GREEN_TIME = 5000, YELLOW_TIME = 2000;

void setup() {
  pinMode(ledR, OUTPUT); pinMode(ledY, OUTPUT); pinMode(ledG, OUTPUT);
  pinMode(btn, INPUT_PULLUP);
  stateEnterTime = millis();
}

void setLights() {
  digitalWrite(ledR, currentState == RED);
  digitalWrite(ledY, currentState == YELLOW);
  digitalWrite(ledG, currentState == GREEN);
}

void loop() {
  unsigned long now = millis();
  
  // State Transitions
  switch (currentState) {
    case RED:
      if (now - stateEnterTime >= RED_TIME) {
        currentState = GREEN;
        stateEnterTime = now;
      }
      break;
    case GREEN:
      bool pedestrian = (digitalRead(btn) == LOW);
      // Shorten green if button pressed after 2s
      unsigned long effectiveGreenTime = pedestrian && (now - stateEnterTime > 2000) ? 2000 : GREEN_TIME;
      if (now - stateEnterTime >= effectiveGreenTime) {
        currentState = YELLOW;
        stateEnterTime = now;
      }
      break;
    case YELLOW:
      if (now - stateEnterTime >= YELLOW_TIME) {
        currentState = RED;
        stateEnterTime = now;
      }
      break;
  }
  setLights();
}` }
        ]
      },
       {
        id: '3.2',
        title: { en: 'Project B: Temperature Alarm', vi: 'Dự án B: Cảnh báo nhiệt độ' },
        sections: [
          { type: SectionType.OBJECTIVE, content: [{ en: 'Read temperature from an LM35, display on LCD; turn on a fan when T > 35°C, turn off when T < 33°C.', vi: 'Đọc LM35, hiển thị LCD; bật quạt khi T > 35°C, tắt khi T < 33°C.' }, { en: '(Optional) Save the threshold to EEPROM to persist it across restarts.', vi: 'Ghi ngưỡng vào EEPROM (tự chọn) để lưu qua lần khởi động.'}]},
          { type: SectionType.KNOWLEDGE, title: { en: 'Hysteresis Logic', vi: 'Logic Hysteresis' }, content: {en: 'To prevent the fan from rapidly switching on and off when the temperature is hovering around the threshold, we use two setpoints: a higher one to turn on (e.g., 35°C) and a lower one to turn off (e.g., 33°C). This creates a stable "dead zone".', vi: 'Để ngăn quạt bật tắt liên tục khi nhiệt độ dao động quanh ngưỡng, chúng ta sử dụng hai điểm đặt: một điểm cao hơn để bật (ví dụ: 35°C) và một điểm thấp hơn để tắt (ví dụ: 33°C). Điều này tạo ra một "vùng chết" ổn định.'} },
          { type: SectionType.CODE, content: `#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);
const int tempSensorPin = A0;
const int fanPin = 9; // Relay or transistor pin

const float TEMP_ON_THRESHOLD = 35.0;
const float TEMP_OFF_THRESHOLD = 33.0;
bool fanOn = false;

void setup() {
  lcd.init();
  lcd.backlight();
  pinMode(fanPin, OUTPUT);
  digitalWrite(fanPin, LOW); // Fan off initially
}

void loop() {
  int raw = analogRead(tempSensorPin);
  float tempC = (raw * 5.0 / 1023.0) * 100.0;

  // Hysteresis logic
  if (tempC >= TEMP_ON_THRESHOLD) {
    fanOn = true;
  } else if (tempC <= TEMP_OFF_THRESHOLD) {
    fanOn = false;
  }
  
  digitalWrite(fanPin, fanOn);

  // Display on LCD
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Temp: ");
  lcd.print(tempC, 1);
  lcd.print((char)223);
  lcd.print("C");

  lcd.setCursor(0, 1);
  lcd.print("Fan: ");
  lcd.print(fanOn ? "ON" : "OFF");

  delay(1000);
}`}
        ]
      },
       {
        id: '3.3',
        title: { en: 'Project C: Mini Smart Home', vi: 'Dự án C: Nhà thông minh mini' },
        sections: [
          { type: SectionType.OBJECTIVE, content: [{ en: 'Manual Mode: Control a light via a relay with ON1/OFF1 commands.', vi: 'Chế độ Manual: ON1/0FF1 điều khiển đèn qua relay.' }, { en: 'Auto Mode: Turn on a fan based on a temperature threshold; display status on LCD.', vi: 'Chế độ Auto: bật quạt theo ngưỡng nhiệt; hiển thị trạng thái LCD.'}]},
          { type: SectionType.CODE, content: `#include <SoftwareSerial.h>

SoftwareSerial BT(2, 3); // RX, TX
const int relayPin = 8;
const int tempSensorPin = A0;
const float TEMP_THRESHOLD = 30.0;
bool autoMode = false;

void setup() {
  pinMode(relayPin, OUTPUT);
  BT.begin(9600);
  Serial.begin(9600);
}

void loop() {
  // Check for Bluetooth commands
  if (BT.available()) {
    String command = BT.readStringUntil('\\n');
    command.trim();
    
    if (command == "ON1") {
      digitalWrite(relayPin, HIGH);
      Serial.println("Relay ON");
    } else if (command == "OFF1") {
      digitalWrite(relayPin, LOW);
      Serial.println("Relay OFF");
    } else if (command == "MODE:A") {
      autoMode = true;
      Serial.println("Auto Mode ON");
    } else if (command == "MODE:M") {
      autoMode = false;
      Serial.println("Manual Mode ON");
    }
  }

  // Handle Auto mode
  if (autoMode) {
    int raw = analogRead(tempSensorPin);
    float tempC = (raw * 5.0 / 1023.0) * 100.0;
    if (tempC > TEMP_THRESHOLD) {
      digitalWrite(relayPin, HIGH); // Turn on fan/light
    } else {
      digitalWrite(relayPin, LOW);
    }
  }
}`}
        ]
      },
       {
        id: '3.4',
        title: { en: 'Project D: Obstacle Avoiding Robot', vi: 'Dự án D: Robot tránh vật cản' },
        sections: [
          { type: SectionType.OBJECTIVE, content: [{ en: 'Measure distance, and decide whether to go straight/backward/turn.', vi: 'Đo khoảng cách, đưa ra quyết định đi thẳng/lùi/quay.' }, { en: 'Manage behavior using an FSM or a millis() scheduler.', vi: 'Quản lí hành vi bằng FSM hoặc bộ lập lịch millis().'}]},
          { type: SectionType.KNOWLEDGE, title: { en: 'How HC-SR04 works', vi: 'Cách HC-SR04 hoạt động' }, content: {en: 'You send a short 10-microsecond pulse to the TRIG pin. The sensor sends out an 8-cycle sonic burst. It then listens for the echo. The ECHO pin goes high for the duration of the sound travel time. Distance = (Time * SpeedOfSound) / 2.', vi: 'Bạn gửi một xung ngắn 10 micro giây đến chân TRIG. Cảm biến phát ra một chùm siêu âm 8 chu kỳ. Sau đó, nó lắng nghe âm thanh dội lại. Chân ECHO sẽ ở mức cao trong khoảng thời gian âm thanh di chuyển. Khoảng cách = (Thời gian * Tốc độ âm thanh) / 2.'} },
          { type: SectionType.CODE, content: `// Motor A
const int ENA = 5;
const int IN1 = 6;
const int IN2 = 7;
// Motor B
const int ENB = 11;
const int IN3 = 12;
const int IN4 = 13;

// Ultrasonic Sensor
const int TRIG_PIN = 9;
const int ECHO_PIN = 10;

const int OBSTACLE_DISTANCE = 20; // in cm

void setup() {
  pinMode(ENA, OUTPUT); pinMode(IN1, OUTPUT); pinMode(IN2, OUTPUT);
  pinMode(ENB, OUTPUT); pinMode(IN3, OUTPUT); pinMode(IN4, OUTPUT);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  Serial.begin(9600);
}

void moveForward() {
  digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW); analogWrite(ENA, 200);
  digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW); analogWrite(ENB, 200);
}

void moveBackward() {
  digitalWrite(IN1, LOW); digitalWrite(IN2, HIGH); analogWrite(ENA, 150);
  digitalWrite(IN3, LOW); digitalWrite(IN4, HIGH); analogWrite(ENB, 150);
}

void turnLeft() {
  digitalWrite(IN1, LOW); digitalWrite(IN2, HIGH); analogWrite(ENA, 180);
  digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW); analogWrite(ENB, 180);
}

void stopMotors() {
  digitalWrite(IN1, LOW); digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW); digitalWrite(IN4, LOW);
}

long getDistance() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  long duration = pulseIn(ECHO_PIN, HIGH);
  return duration * 0.034 / 2; // Calculate distance in cm
}

void loop() {
  long distance = getDistance();
  Serial.print("Distance: "); Serial.println(distance);

  if (distance <= OBSTACLE_DISTANCE && distance > 0) {
    // Obstacle detected
    stopMotors();
    delay(100);
    moveBackward();
    delay(300);
    turnLeft();
    delay(300);
  } else {
    // No obstacle
    moveForward();
  }
  delay(50);
}`}
        ]
      }
    ]
  },
  {
    id: 'p4',
    title: { en: 'Part 4: Exercises', vi: 'Phần 4: Bài tập' },
    lessons: [
       {
        id: '4.1',
        title: { en: 'Advanced Exercises', vi: 'Bài tập nâng cao' },
        sections: [
          { type: SectionType.EXERCISE, title: {en: 'Knight Rider', vi: 'Hiệu ứng Knight Rider'}, content: {en: 'Create a Knight Rider / Cylon scanner effect with 3 LEDs using millis(); do not use delay().', vi: 'Tạo hiệu ứng đèn chạy Knight Rider / Cylon với 3 LED dùng millis(); không dùng delay().'}},
          { type: SectionType.EXERCISE, title: {en: 'Bluetooth Motor Control', vi: 'Điều khiển động cơ qua Bluetooth'}, content: {en: 'Control DC motor speed via Bluetooth using a packet like Sxxx (where xxx is a speed from 0-255).', vi: 'Điều khiển tốc độ động cơ DC qua Bluetooth theo gói Sxxx (trong đó xxx là tốc độ từ 0-255).'} },
          { type: SectionType.EXERCISE, title: {en: 'CSV Temperature Logger', vi: 'Ghi log nhiệt độ CSV'}, content: {en: 'Log temperature to the Serial Monitor in CSV format every 1 second; include a millis() timestamp column.', vi: 'Logger nhiệt độ ra Serial dạng CSV mỗi 1 s; thêm cột thời gian millis().'} },
          { type: SectionType.EXERCISE, title: {en: 'LCD Menu', vi: 'Menu trên LCD'}, content: {en: 'Write an LCD menu (using UP/DOWN/OK buttons) to adjust a threshold and save it to EEPROM.', vi: 'Viết menu LCD (UP/DOWN/OK) để chỉnh ngưỡng và lưu EEPROM.'} },
        ]
      }
    ]
  },
  {
    id: 'p5',
    title: { en: 'Part 5: Appendix', vi: 'Phần 5: Phụ lục' },
    lessons: [
       {
        id: '5.1',
        title: { en: 'Quick Reference', vi: 'Tham khảo nhanh' },
        sections: [
          { 
            type: SectionType.APPENDIX, 
            title: {en: 'A. Minimum Suggested BOM', vi: 'A. BOM gợi ý tối thiểu'}, 
            content: [
              {en: 'Arduino Uno or Nano, USB cable; breadboard, jumper wires.', vi: 'Arduino Uno hoặc Nano, cáp USB; breadboard, dây dupont.'},
              {en: 'Resistors: 220Ω, 1kΩ, 10kΩ; LEDs; push buttons; 10k potentiometer.', vi: 'Điện trở 220Ω, 1kΩ, 10kΩ; LED; nút nhấn; biến trở 10k.'},
              {en: 'LM35; LCD 1602 I2C; HC-SR04; HC-05; ESP8266-01 (or NodeMCU).', vi: 'LM35; LCD 1602 I2C; HC-SR04; HC-05; ESP8266-01 (hoặc NodeMCU).'},
              {en: 'L298N driver; 2 DC motors; SG90 servo; 1-channel relay; buzzer.', vi: 'Driver L298N; 2 động cơ DC; servo SG90; relay 1 kênh; buzzer.'},
              {en: 'Power Supply: 5V/2A; 18650 battery + holder; switch; 100-470µF capacitor.', vi: 'Nguồn 5V/2A; pin 18650 + holder; công tắc; tụ 100-470µF.'},
          ]},
          { 
            type: SectionType.APPENDIX, 
            title: {en: 'B. Quick Pinout (Arduino Uno)', vi: 'B. Sơ đồ chân nhanh (Arduino Uno)'}, 
            content: [
              {en: 'PWM: 3, 5, 6, 9, 10, 11', vi: 'PWM: 3, 5, 6, 9, 10, 11'},
              {en: 'ADC: A0-A5', vi: 'ADC: A0-A5'},
              {en: 'UART: D0 (RX), D1 (TX)', vi: 'UART: D0 (RX), D1 (TX)'},
              {en: 'I2C: A4 (SDA), A5 (SCL)', vi: 'I2C: A4 (SDA), A5 (SCL)'},
              {en: 'SPI: D10 (SS), D11 (MOSI), D12 (MISO), D13 (SCK)', vi: 'SPI: D10 (SS), D11 (MOSI), D12 (MISO), D13 (SCK)'},
              {en: 'AREF: External ADC reference (use analogReference)', vi: 'AREF: tham chiếu ADC ngoài (cần analogReference phù hợp)'},
          ]},
          { 
            type: SectionType.APPENDIX, 
            title: {en: 'C. Quick Troubleshooting Checklist', vi: 'C. Checklist gỡ lỗi nhanh'}, 
            content: [
              {en: 'IDE: Correct Board/Port? CH340 driver installed for clones? Good USB cable?', vi: 'IDE: đúng Board/Port; driver CH340 cho Nano clone; cáp USB tốt.'},
              {en: 'Power: Sufficient current for 5V? Separate supply for motors/servos? Common GND?', vi: 'Nguồn: 5V đủ dòng; động cơ/servo dùng nguồn riêng; GND chung.'},
              {en: 'Wiring: Correct order? SDA/SCL not swapped? 3.3V logic level for RX modules?', vi: 'Dây: đúng thứ tự; SDA/SCL không đảo; mức logic 3.3V cho RX module.'},
              {en: 'Serial Monitor: Enabled logs? Use F("text") macro to save RAM.', vi: 'Serial Monitor: bật log; dùng F("text") để tiết kiệm RAM.'},
              {en: 'Isolate error: Replace a sensor with a fake value; measure Vcc and voltage drop under load.', vi: 'Cô lập lỗi: thay cảm biến bằng số giả; đo Vcc và sụt áp khi tải.'},
          ]},
          { 
            type: SectionType.APPENDIX, 
            title: {en: 'D. Concise Code Style', vi: 'D. Style code ngắn gọn'}, 
            content: [
              {en: 'Constants: UPPER_CASE; variables/functions: lowerCamelCase; enums: PascalCase.', vi: 'Hằng: UPPER_CASE; biến/hàm: lowerCamelCase; enum: PascalCase.'},
              {en: 'Avoid delay() in main logic; prefer millis() + FSM.', vi: 'Tránh delay() trong logic chính; ưu tiên millis() + FSM.'},
              {en: 'Comment with purpose, units, thresholds; separate functions by role.', vi: 'Comment mục đích, đơn vị đo, ngưỡng; tách hàm theo chức năng.'},
          ]},
        ]
      },
      {
        id: '5.2',
        title: { en: 'Main References', vi: 'Nguồn tham khảo chính' },
        sections: [
            {
                type: SectionType.APPENDIX,
                title: { en: 'External Resources', vi: 'Nguồn tham khảo chính' },
                content: [
                    { en: 'Technology 12 Textbook - Electrical - Electronics (Topic 9: Microcontrollers, Lessons 24-26) - loigiaihay.com', vi: 'SGK Công nghệ 12 – Công nghệ Điện – Điện tử (Chủ đề 9: Vi điều khiển, Bài 24–26) – loigiaihay.com' },
                    { en: 'Arduino Handbook Series (Hoang Pham Gia Khang & Nguyen Hoang Long) - ebookbkmt.com', vi: 'Bộ sách Sổ tay Arduino (Hoàng Phạm Gia Khang & Nguyễn Hoàng Long) – ebookbkmt.com' },
                    { en: 'Control and Programming with Arduino Uno Textbook - dientuviet.com', vi: 'Giáo trình Điều khiển và lập trình với Arduino Uno – dientuviet.com' },
                    { en: 'Arduino for Beginners (IoT Maker Vietnam, OhStem) - ohstem.vn', vi: 'Tài liệu Arduino cho người mới bắt đầu (IoT Maker Việt Nam, OhStem) – ohstem.vn' },
                ]
            }
        ]
      },
      {
        id: '5.3',
        title: { en: 'License', vi: 'Giấy phép' },
        sections: [
          {
            type: SectionType.APPENDIX,
            title: { en: 'License', vi: 'Giấy phép' },
            content: {
              en: 'This material is released under the Creative Commons Attribution 4.0 (CC BY 4.0) license. When using, please provide attribution to: "Arduino Textbook – Long Nguyen".',
              vi: 'Tài liệu phát hành theo giấy phép Creative Commons Attribution 4.0 (CC BY 4.0). Khi sử dụng, vui lòng ghi công: “Giáo trình Arduino – Long Nguyễn”.'
            }
          }
        ]
      }
    ]
  }
];
