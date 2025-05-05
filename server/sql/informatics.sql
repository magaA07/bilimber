-- 1. Добавляем курс "ЕНТ Информатика"
INSERT INTO courses (title, image_url)
VALUES ('ЕНТ Информатика', 'https://example.com/informatics.jpg')
RETURNING id;

-- допустим, курс получил id = 4

-- 2. Добавляем тест к курсу
INSERT INTO tests (course_id, duration_minutes, max_attempts)
VALUES (4, 60, 3)
RETURNING id;

-- допустим, тест получил id = 4

-- 3. Добавляем вопросы
INSERT INTO questions (test_id, question_text)
VALUES 
(4, 'Как расшифровывается аббревиатура ПК?'),
(4, 'Как называется основная плата компьютера?'),
(4, 'Какой язык является основным для создания веб-страниц?'),
(4, 'Что такое алгоритм?'),
(4, 'Какой тип памяти является энергозависимой?'),
(4, 'Что означает термин "бит"?'),
(4, 'Какой протокол используется для передачи веб-страниц?'),
(4, 'Как называется устройство для вывода информации на бумагу?'),
(4, 'Как называется операция копирования данных на внешний носитель?'),
(4, 'Что такое операционная система?')
RETURNING id;

-- допустим, вопросы получили id от 31 до 40

-- 4. Добавляем ответы к каждому вопросу

-- Вопрос 31
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(31, 'Персональный компьютер', TRUE),
(31, 'Пользовательский ключ', FALSE),
(31, 'Периферийный коннектор', FALSE),
(31, 'Программная конфигурация', FALSE);

-- Вопрос 32
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(32, 'Материнская плата', TRUE),
(32, 'Видеокарта', FALSE),
(32, 'Процессор', FALSE),
(32, 'Жесткий диск', FALSE);

-- Вопрос 33
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(33, 'HTML', TRUE),
(33, 'Python', FALSE),
(33, 'C++', FALSE),
(33, 'SQL', FALSE);

-- Вопрос 34
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(34, 'Последовательность действий для решения задачи', TRUE),
(34, 'Компьютерная программа', FALSE),
(34, 'Вид программного обеспечения', FALSE),
(34, 'Модель данных', FALSE);

-- Вопрос 35
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(35, 'Оперативная память (RAM)', TRUE),
(35, 'Жесткий диск', FALSE),
(35, 'SSD накопитель', FALSE),
(35, 'Флеш-накопитель', FALSE);

-- Вопрос 36
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(36, 'Единица измерения информации', TRUE),
(36, 'Тип процессора', FALSE),
(36, 'Программа', FALSE),
(36, 'Операционная система', FALSE);

-- Вопрос 37
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(37, 'HTTP', TRUE),
(37, 'FTP', FALSE),
(37, 'SMTP', FALSE),
(37, 'IP', FALSE);

-- Вопрос 38
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(38, 'Принтер', TRUE),
(38, 'Сканер', FALSE),
(38, 'Монитор', FALSE),
(38, 'Микрофон', FALSE);

-- Вопрос 39
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(39, 'Сохранение данных на флешку или диск', TRUE),
(39, 'Удаление файлов', FALSE),
(39, 'Сжатие файлов', FALSE),
(39, 'Запуск программы', FALSE);

-- Вопрос 40
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(40, 'Программа для управления ресурсами компьютера', TRUE),
(40, 'Офисное приложение', FALSE),
(40, 'Компьютерная сеть', FALSE),
(40, 'Вирус', FALSE);
