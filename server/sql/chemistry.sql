-- 1. Добавляем курс "ЕНТ Химия"
INSERT INTO courses (title, image_url)
VALUES ('ЕНТ Химия', 'https://example.com/chemistry.jpg')
RETURNING id;

-- допустим, курс получил id = 3

-- 2. Добавляем тест к курсу
INSERT INTO tests (course_id, duration_minutes, max_attempts)
VALUES (3, 60, 3)
RETURNING id;

-- допустим, тест получил id = 3

-- 3. Добавляем вопросы
INSERT INTO questions (test_id, question_text)
VALUES 
(3, 'Какой элемент обозначается символом O?'),
(3, 'Какая частица находится в ядре атома и не имеет заряда?'),
(3, 'Что такое молекула?'),
(3, 'Какой газ выделяется при реакции металлов с кислотами?'),
(3, 'Как называется процесс соединения веществ с кислородом?'),
(3, 'Какова формула воды?'),
(3, 'Как называется таблица химических элементов?'),
(3, 'Какой элемент является основным компонентом органических веществ?'),
(3, 'Что показывает валентность элемента?'),
(3, 'Какая среда имеет pH меньше 7?')
RETURNING id;

-- допустим, вопросы получили id от 21 до 30

-- 4. Добавляем ответы к каждому вопросу

-- Вопрос 21
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(21, 'Кислород', TRUE),
(21, 'Азот', FALSE),
(21, 'Углерод', FALSE),
(21, 'Водород', FALSE);

-- Вопрос 22
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(22, 'Нейтрон', TRUE),
(22, 'Протон', FALSE),
(22, 'Электрон', FALSE),
(22, 'Позитрон', FALSE);

-- Вопрос 23
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(23, 'Группа связанных атомов', TRUE),
(23, 'Отдельный атом', FALSE),
(23, 'Простое вещество', FALSE),
(23, 'Кристалл', FALSE);

-- Вопрос 24
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(24, 'Водород', TRUE),
(24, 'Кислород', FALSE),
(24, 'Азот', FALSE),
(24, 'Углекислый газ', FALSE);

-- Вопрос 25
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(25, 'Окисление', TRUE),
(25, 'Конденсация', FALSE),
(25, 'Распад', FALSE),
(25, 'Ионизация', FALSE);

-- Вопрос 26
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(26, 'H₂O', TRUE),
(26, 'CO₂', FALSE),
(26, 'O₂', FALSE),
(26, 'H₂', FALSE);

-- Вопрос 27
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(27, 'Периодическая таблица Менделеева', TRUE),
(27, 'Таблица Бойля', FALSE),
(27, 'Таблица Ньютона', FALSE),
(27, 'Таблица Лавуазье', FALSE);

-- Вопрос 28
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(28, 'Углерод', TRUE),
(28, 'Кислород', FALSE),
(28, 'Азот', FALSE),
(28, 'Водород', FALSE);

-- Вопрос 29
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(29, 'Число связей атома с другими атомами', TRUE),
(29, 'Массу атома', FALSE),
(29, 'Объем молекулы', FALSE),
(29, 'Электрический заряд атома', FALSE);

-- Вопрос 30
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(30, 'Кислая среда', TRUE),
(30, 'Щелочная среда', FALSE),
(30, 'Нейтральная среда', FALSE),
(30, 'Газовая среда', FALSE);
