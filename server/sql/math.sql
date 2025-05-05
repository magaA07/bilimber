-- 1. Добавляем курс
INSERT INTO courses (title, image_url)
VALUES ('ЕНТ Математика', '/assets/course/math2.png')
RETURNING id;

-- допустим, курс получил id = 1

-- 2. Добавляем тест к курсу
INSERT INTO tests (course_id, duration_minutes, max_attempts)
VALUES (1, 60, 3)
RETURNING id;

-- допустим, тест получил id = 1

-- 3. Добавляем вопросы
INSERT INTO questions (test_id, question_text)
VALUES 
(1, 'Чему равна производная функции f(x) = x^2?'),
(1, 'Решите уравнение: 2x + 5 = 15.'),
(1, 'Чему равен синус 30 градусов?'),
(1, 'Найдите значение выражения: 3^2 + 4^2.'),
(1, 'Решите неравенство: x^2 > 4.'),
(1, 'Сколько градусов в развернутом угле?'),
(1, 'Какой корень уравнения x^2 - 9 = 0?'),
(1, 'Найдите площадь круга радиуса 2.'),
(1, 'В каком случае прямые параллельны?'),
(1, 'Чему равен логарифм log₃(9)?')
RETURNING id;

-- допустим, вопросы получили id от 1 до 10

-- 4. Добавляем ответы к каждому вопросу

-- Вопрос 1
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(1, '2x', TRUE),
(1, 'x', FALSE),
(1, 'x^2', FALSE),
(1, '2', FALSE);

-- Вопрос 2
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(2, 'x = 5', TRUE),
(2, 'x = 10', FALSE),
(2, 'x = -5', FALSE),
(2, 'x = 0', FALSE);

-- Вопрос 3
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(3, '1/2', TRUE),
(3, '√3/2', FALSE),
(3, '0', FALSE),
(3, '1', FALSE);

-- Вопрос 4
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(4, '25', TRUE),
(4, '12', FALSE),
(4, '9', FALSE),
(4, '16', FALSE);

-- Вопрос 5
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(5, 'x > 2 или x < -2', TRUE),
(5, 'x > -2 и x < 2', FALSE),
(5, 'x > 0', FALSE),
(5, 'x < 0', FALSE);

-- Вопрос 6
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(6, '180', TRUE),
(6, '90', FALSE),
(6, '360', FALSE),
(6, '45', FALSE);

-- Вопрос 7
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(7, 'x = 3 или x = -3', TRUE),
(7, 'x = 9', FALSE),
(7, 'x = -9', FALSE),
(7, 'x = 0', FALSE);

-- Вопрос 8
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(8, '4π', TRUE),
(8, '2π', FALSE),
(8, 'π', FALSE),
(8, '8π', FALSE);

-- Вопрос 9
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(9, 'При равных углах наклона', TRUE),
(9, 'При пересечении под углом', FALSE),
(9, 'При общей точке', FALSE),
(9, 'При разной длине', FALSE);

-- Вопрос 10
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(10, '2', TRUE),
(10, '3', FALSE),
(10, '9', FALSE),
(10, '1/2', FALSE);
