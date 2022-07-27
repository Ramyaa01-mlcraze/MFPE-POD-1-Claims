CREATE TABLE Bills(mid varchar(20), lastPaidDate date, dueAmount int, lateCharge int, dueDate date, pid varchar(20));

INSERT INTO Bills(mid, lastPaidDate, dueAmount, lateCharge, dueDate, pid) VALUES ('M101', '2022-02-01', 10000, 800, '2023-02-01',  'P101');
INSERT INTO Bills(mid, lastPaidDate, dueAmount, lateCharge, dueDate, pid) values('M102', '2022-01-10', 50500, 6500, '2022-12-10', 'P103');
INSERT INTO Bills(mid, lastPaidDate, dueAmount, lateCharge, dueDate, pid) values('M103', '2021-12-20', 12000, 0, '2022-07-30', 'P104');
INSERT INTO Bills(mid, lastPaidDate, dueAmount, lateCharge, dueDate, pid) values('M104', '2022-01-01', 8000, 0, '2023-08-10', 'P102;');
INSERT INTO Bills(mid, lastPaidDate, dueAmount, lateCharge, dueDate, pid) values('M105', '2022-01-05', 25000, 4000, '2023-07-05', 'P103');
