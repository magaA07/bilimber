-- 1. Добавляем курс "ЕНТ История Казахстана"
INSERT INTO courses (title, image_url)
VALUES ('ЕНТ История Казахстана', 'https://example.com/history-kazakhstan.jpg')
RETURNING id;

-- допустим, курс получил id = 5

-- 2. Добавляем тест к курсу
INSERT INTO tests (course_id, duration_minutes, max_attempts)
VALUES (5, 60, 3)
RETURNING id;

-- допустим, тест получил id = 5

-- 3. Добавляем вопросы
INSERT INTO questions (test_id, question_text)
VALUES 
(5, 'Когда произошло образование Казахского ханства?'),
(5, 'Кто был первым ханом Казахского ханства?'),
(5, 'Какой город был столицей Казахского ханства при Касым-хане?'),
(5, 'Какое племя возглавил Кенесары Касымов в восстании XIX века?'),
(5, 'Когда произошло присоединение Младшего жуза к России?'),
(5, 'Какой батыр был одним из лидеров восстания 1837-1847 гг.?'),
(5, 'Кто был лидером национально-освободительного движения 1916 года?'),
(5, 'Когда была образована Казахская Советская Социалистическая Республика?'),
(5, 'Кто был первым президентом независимого Казахстана?'),
(5, 'В каком году Казахстан стал членом ООН?')
RETURNING id;

-- допустим, вопросы получили id от 41 до 50

-- 4. Добавляем ответы к каждому вопросу

-- Вопрос 41
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(41, '1465-1466 годы', TRUE),
(41, '1511-1512 годы', FALSE),
(41, '1219-1220 годы', FALSE),
(41, '1710-1711 годы', FALSE);

-- Вопрос 42
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(42, 'Керей', TRUE),
(42, 'Жаныбек', FALSE),
(42, 'Абылай хан', FALSE),
(42, 'Касым хан', FALSE);

-- Вопрос 43
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(43, 'Туркестан', TRUE),
(43, 'Тараз', FALSE),
(43, 'Отырар', FALSE),
(43, 'Сыгнак', FALSE);

-- Вопрос 44
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(44, 'Казахи', TRUE),
(44, 'Каракалпаки', FALSE),
(44, 'Уйгуры', FALSE),
(44, 'Калмыки', FALSE);

-- Вопрос 45
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(45, '1731 год', TRUE),
(45, '1831 год', FALSE),
(45, '1631 год', FALSE),
(45, '1931 год', FALSE);

-- Вопрос 46
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(46, 'Кенесары Касымов', TRUE),
(46, 'Амангельды Иманов', FALSE),
(46, 'Абылай хан', FALSE),
(46, 'Сырым Датулы', FALSE);

-- Вопрос 47
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(47, 'Амангельды Иманов', TRUE),
(47, 'Алихан Букейханов', FALSE),
(47, 'Кенесары Касымов', FALSE),
(47, 'Мухтар Ауэзов', FALSE);

-- Вопрос 48
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(48, '1936 год', TRUE),
(48, '1920 год', FALSE),
(48, '1991 год', FALSE),
(48, '1956 год', FALSE);

-- Вопрос 49
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(49, 'Нурсултан Назарбаев', TRUE),
(49, 'Касым-Жомарт Токаев', FALSE),
(49, 'Динмухамед Кунаев', FALSE),
(49, 'Алихан Букейханов', FALSE);

-- Вопрос 50
INSERT INTO answers (question_id, answer_text, is_correct)
VALUES
(50, '1992 год', TRUE),
(50, '1991 год', FALSE),
(50, '1995 год', FALSE),
(50, '2001 год', FALSE);
