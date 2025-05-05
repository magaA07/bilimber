-- 1. Добавляем курс "ЕНТ Физика"
INSERT INTO courses (title, image_url)
VALUES ('ЕНТ Физика', 'https://example.com/physics.jpg')
RETURNING id;

-- допустим, курс получил id = 2

-- 2. Добавляем тест к курсу
INSERT INTO tests (course_id, duration_minutes, max_attempts)
VALUES (2, 60, 3)
RETURNING id;

-- допустим, тест получил id = 2

-- 3. Добавляем вопросы
INSERT INTO questions (test_id, question_text)
VALUES 
(2, 'Какой единицей измеряется сила в системе СИ?'),
(2, 'Какова формула закона всемирного тяготения?'),
(2, 'Чему равна скорость света в вакууме?'),
(2, 'Что измеряет амперметр?'),
(2, 'Какова формула работы силы?'),
(2, 'Что происходит при плавлении вещества?'),
(2, 'Как называется процесс перехода вещества из жидкого состояния в газообразное?'),
(2, 'Что показывает масса тела?'),
(2, 'Как называется сила, препятствующая скольжению тел?'),
(2, 'Какой закон описывает силу упругости пружины?')
RETURNING id;

-- допустим, вопросы получили id от 11 до 20

-- 4. Добавляем ответы к каждому вопросу

-- Вопрос 11
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(11, 'Ньютон', TRUE),
(11, 'Джоуль', FALSE),
(11, 'Паскаль', FALSE),
(11, 'Ватт', FALSE);

-- Вопрос 12
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(12, 'F = G * (m1 * m2) / r^2', TRUE),
(12, 'F = m * a', FALSE),
(12, 'F = kx', FALSE),
(12, 'P = F / S', FALSE);

-- Вопрос 13
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(13, '3×10^8 м/с', TRUE),
(13, '1.5×10^8 м/с', FALSE),
(13, '3×10^6 м/с', FALSE),
(13, '1×10^6 м/с', FALSE);

-- Вопрос 14
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(14, 'Силу тока', TRUE),
(14, 'Напряжение', FALSE),
(14, 'Сопротивление', FALSE),
(14, 'Мощность', FALSE);

-- Вопрос 15
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(15, 'A = F * s', TRUE),
(15, 'A = m * g', FALSE),
(15, 'A = P * V', FALSE),
(15, 'A = q * E', FALSE);

-- Вопрос 16
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(16, 'Поглощение тепла и переход в жидкое состояние', TRUE),
(16, 'Выделение тепла и переход в газ', FALSE),
(16, 'Увеличение массы тела', FALSE),
(16, 'Сокращение объема', FALSE);

-- Вопрос 17
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(17, 'Испарение', TRUE),
(17, 'Конденсация', FALSE),
(17, 'Кристаллизация', FALSE),
(17, 'Плавление', FALSE);

-- Вопрос 18
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(18, 'Меру инертности тела', TRUE),
(18, 'Скорость движения тела', FALSE),
(18, 'Температуру тела', FALSE),
(18, 'Объем тела', FALSE);

-- Вопрос 19
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(19, 'Сила трения', TRUE),
(19, 'Сила тяжести', FALSE),
(19, 'Сила упругости', FALSE),
(19, 'Сила Архимеда', FALSE);

-- Вопрос 20
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(20, 'Закон Гука', TRUE),
(20, 'Закон Паскаля', FALSE),
(20, 'Закон Ома', FALSE),
(20, 'Закон Бойля-Мариотта', FALSE);
