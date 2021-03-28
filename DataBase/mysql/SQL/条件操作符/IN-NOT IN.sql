SELECT * FROM gm_function_switch WHERE serverId IN ("public", "1001");

-- 1	public	0	0	0	0	1	0	0	1
-- 2	1001	1	0	1	1	1	1	1	1

SELECT * FROM gm_function_switch WHERE serverId IN ("public", "public");
-- 1	public	0	0	0	0	1	0	0	1


表结构
CREATE TABLE `crm_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_price` int(10) NOT NULL DEFAULT '0' COMMENT '课程价格(分)',
  `status` char(100) NOT NULL DEFAULT '' COMMENT 'normal:正常,refund:退费,quit:退班,reserve:保留学籍,resume:复学,transfer:转班,claim:认领 us自主下单同步到crm，被认领后是claim状态',
  `total_fee` int(10) NOT NULL DEFAULT '0' COMMENT '应收金额(分)',
  `total_paid_fee` int(10) NOT NULL DEFAULT '0' COMMENT '全部已收金额'
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`) USING BTREE COMMENT '用户ID',
  KEY `serviceman_department_no` (`serviceman_department_no`) USING BTREE COMMENT '创建人员部门编号',
  KEY `student_id` (`student_id`) USING BTREE COMMENT '学生ID',
  KEY `student_mobile` (`student_mobile`) USING BTREE COMMENT '学生手机号',
  KEY `department_no` (`department_no`) USING BTREE COMMENT '部门ID',
  KEY `product_id` (`product_id`) USING BTREE COMMENT '产品ID',
  KEY `trade_no` (`trade_no`) USING BTREE COMMENT '交易单号',
  KEY `fully_paid_at` (`fully_paid_at`) USING BTREE COMMENT '完成全款支付时间',
  KEY `paid_at` (`paid_at`) USING BTREE COMMENT '收款日期',
  KEY `received_at` (`received_at`) USING BTREE COMMENT '到账日期',
  KEY `refunded_at` (`refunded_at`) USING BTREE COMMENT '退款日期',
  KEY `created_at` (`created_at`) USING BTREE COMMENT '创建时间',
  KEY `salesman_no` (`salesman_no`) USING BTREE COMMENT '销售人员编号',
  KEY `salesman_department_no` (`salesman_department_no`) USING BTREE COMMENT '销售人员部门编号',
  KEY `serviceman_no` (`serviceman_no`) USING BTREE COMMENT '创建人员编号'
) ENGINE=InnoDB AUTO_INCREMENT=135881 DEFAULT CHARSET=utf8mb4 COMMENT='订单表';

SELECT count(*) FROM `crm_order`;                 
-- 112495

SELECT * FROM `crm_order`
where status in ('normal');                        -- 8s

SELECT * FROM `crm_order`
where status not in ('quit','refund');             -- 73s

SELECT * FROM `crm_order`
where not  EXISTS ('quit','refund');