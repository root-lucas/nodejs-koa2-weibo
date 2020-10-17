/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : koa2_weibo_db

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 17/10/2020 13:53:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for atrelations
-- ----------------------------
DROP TABLE IF EXISTS `atrelations`;
CREATE TABLE `atrelations`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL COMMENT '用户 Id',
  `blogId` int NOT NULL COMMENT '微博 Id',
  `isRead` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否已读',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `blogId`(`blogId`) USING BTREE,
  CONSTRAINT `atrelations_ibfk_1` FOREIGN KEY (`blogId`) REFERENCES `blogs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of atrelations
-- ----------------------------
INSERT INTO `atrelations` VALUES (1, 1, 4, 1, '2020-03-22 17:51:23', '2020-03-23 06:45:59');
INSERT INTO `atrelations` VALUES (2, 1, 5, 1, '2020-03-22 17:54:07', '2020-03-23 06:45:59');
INSERT INTO `atrelations` VALUES (3, 2, 5, 1, '2020-03-22 17:54:07', '2020-03-23 06:46:36');
INSERT INTO `atrelations` VALUES (4, 2, 6, 1, '2020-03-22 18:26:08', '2020-03-23 06:46:36');
INSERT INTO `atrelations` VALUES (5, 2, 7, 1, '2020-03-22 18:27:12', '2020-03-23 06:46:36');
INSERT INTO `atrelations` VALUES (6, 1, 7, 1, '2020-03-22 18:27:12', '2020-03-23 06:45:59');
INSERT INTO `atrelations` VALUES (7, 2, 8, 1, '2020-03-22 18:28:39', '2020-03-23 06:46:36');
INSERT INTO `atrelations` VALUES (8, 3, 9, 0, '2020-03-22 18:30:05', '2020-03-22 18:30:05');
INSERT INTO `atrelations` VALUES (9, 2, 9, 1, '2020-03-22 18:30:05', '2020-03-23 06:46:36');
INSERT INTO `atrelations` VALUES (10, 3, 10, 0, '2020-03-22 18:30:26', '2020-03-22 18:30:26');
INSERT INTO `atrelations` VALUES (11, 2, 11, 1, '2020-03-23 05:02:09', '2020-03-23 06:46:36');
INSERT INTO `atrelations` VALUES (12, 1, 12, 1, '2020-03-23 05:02:58', '2020-03-23 06:45:59');
INSERT INTO `atrelations` VALUES (13, 2, 12, 1, '2020-03-23 05:02:58', '2020-03-23 06:46:36');
INSERT INTO `atrelations` VALUES (14, 2, 13, 1, '2020-03-23 06:43:53', '2020-03-23 06:46:36');
INSERT INTO `atrelations` VALUES (15, 2, 15, 1, '2020-03-23 06:44:53', '2020-03-23 06:46:36');
INSERT INTO `atrelations` VALUES (16, 1, 16, 0, '2020-03-23 06:46:26', '2020-03-23 06:46:26');
INSERT INTO `atrelations` VALUES (17, 2, 16, 1, '2020-03-23 06:46:26', '2020-03-23 06:46:36');
INSERT INTO `atrelations` VALUES (18, 1, 19, 0, '2020-03-23 08:51:43', '2020-03-23 08:51:43');

-- ----------------------------
-- Table structure for blogs
-- ----------------------------
DROP TABLE IF EXISTS `blogs`;
CREATE TABLE `blogs`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL COMMENT '用户 ID',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '微博内容',
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '图片地址',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `userId`(`userId`) USING BTREE,
  CONSTRAINT `blogs_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of blogs
-- ----------------------------
INSERT INTO `blogs` VALUES (1, 1, '我是李四', '', '2020-03-21 20:10:55', '2020-03-21 20:10:55');
INSERT INTO `blogs` VALUES (2, 2, '我是张三', '', '2020-03-21 20:11:27', '2020-03-21 20:11:27');
INSERT INTO `blogs` VALUES (3, 2, '@李四 - lisi 你好', '', '2020-03-21 20:15:16', '2020-03-21 20:15:16');
INSERT INTO `blogs` VALUES (4, 2, '哈喽 @李四 - lisi 你在吗？', '', '2020-03-22 17:51:23', '2020-03-22 17:51:23');
INSERT INTO `blogs` VALUES (5, 3, '你们好 @李四 - lisi @张三 - zhangsan 我刚注册的', '', '2020-03-22 17:54:07', '2020-03-22 17:54:07');
INSERT INTO `blogs` VALUES (6, 3, '@张三 - zhangsan 在干嘛', '', '2020-03-22 18:26:08', '2020-03-22 18:26:08');
INSERT INTO `blogs` VALUES (7, 2, '在通宵 // @张三 - zhangsan : 哈喽 @李四 - lisi 你在吗？', '', '2020-03-22 18:27:12', '2020-03-22 18:27:12');
INSERT INTO `blogs` VALUES (8, 3, '@张三 - zhangsan 我是王五', '', '2020-03-22 18:28:39', '2020-03-22 18:28:39');
INSERT INTO `blogs` VALUES (9, 2, '是吗 // @王五 - wangwu : @张三 - zhangsan 我是王五', '', '2020-03-22 18:30:05', '2020-03-22 18:30:05');
INSERT INTO `blogs` VALUES (10, 2, '@王五 - wangwu mm', '', '2020-03-22 18:30:26', '2020-03-22 18:30:26');
INSERT INTO `blogs` VALUES (11, 1, '@张三 - zhangsan 你好李四', '', '2020-03-23 05:02:09', '2020-03-23 05:02:09');
INSERT INTO `blogs` VALUES (12, 2, '哈哈哈 // @李四 - lisi : @张三 - zhangsan 你好李四', '', '2020-03-23 05:02:58', '2020-03-23 05:02:58');
INSERT INTO `blogs` VALUES (13, 1, '@张三 - zhangsan 读取数据', '', '2020-03-23 06:43:53', '2020-03-23 06:43:53');
INSERT INTO `blogs` VALUES (14, 1, '哈喽baby', '', '2020-03-23 06:44:16', '2020-03-23 06:44:16');
INSERT INTO `blogs` VALUES (15, 1, '@张三 - zhangsan super cool', '/1584945891818.F.gif', '2020-03-23 06:44:53', '2020-03-23 06:44:53');
INSERT INTO `blogs` VALUES (16, 1, '我在学习 // @李四 - lisi : @张三 - zhangsan super cool', '/1584945984303.1018190-bd12202658a6a391.png', '2020-03-23 06:46:25', '2020-03-23 06:46:25');
INSERT INTO `blogs` VALUES (17, 2, '单元测试自动创建的微博_1584953342299', '/xxx.png', '2020-03-23 08:49:02', '2020-03-23 08:49:02');
INSERT INTO `blogs` VALUES (18, 2, '单元测试自动创建的微博_1584953494852', '/xxx.png', '2020-03-23 08:51:34', '2020-03-23 08:51:34');
INSERT INTO `blogs` VALUES (19, 2, '单元测试自动创建的微博 @李四 - lisi', NULL, '2020-03-23 08:51:42', '2020-03-23 08:51:42');
INSERT INTO `blogs` VALUES (20, 8, 'aaaa', '', '2020-03-31 05:15:05', '2020-03-31 05:15:05');
INSERT INTO `blogs` VALUES (21, 9, 'bbbb', '', '2020-03-31 05:16:37', '2020-03-31 05:16:37');
INSERT INTO `blogs` VALUES (22, 1, 'good', '/1602913719234.60da65f38417449da3a2563571121721.jpg', '2020-10-17 05:48:49', '2020-10-17 05:48:49');
INSERT INTO `blogs` VALUES (23, 10, 'hello_lucas', '', '2020-10-17 05:51:20', '2020-10-17 05:51:20');

-- ----------------------------
-- Table structure for userrelations
-- ----------------------------
DROP TABLE IF EXISTS `userrelations`;
CREATE TABLE `userrelations`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL COMMENT '用户 id',
  `followerId` int NOT NULL COMMENT '被关注用户的 id',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `userId`(`userId`) USING BTREE,
  INDEX `followerId`(`followerId`) USING BTREE,
  CONSTRAINT `userrelations_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `userrelations_ibfk_2` FOREIGN KEY (`followerId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of userrelations
-- ----------------------------
INSERT INTO `userrelations` VALUES (1, 1, 1, '2020-03-21 20:10:43', '2020-03-21 20:10:43');
INSERT INTO `userrelations` VALUES (2, 2, 2, '2020-03-21 20:11:16', '2020-03-21 20:11:16');
INSERT INTO `userrelations` VALUES (4, 3, 3, '2020-03-22 17:52:50', '2020-03-22 17:52:50');
INSERT INTO `userrelations` VALUES (5, 3, 2, '2020-03-22 17:53:20', '2020-03-22 17:53:20');
INSERT INTO `userrelations` VALUES (6, 3, 1, '2020-03-22 17:53:22', '2020-03-22 17:53:22');
INSERT INTO `userrelations` VALUES (8, 2, 3, '2020-03-22 18:29:42', '2020-03-22 18:29:42');
INSERT INTO `userrelations` VALUES (9, 1, 2, '2020-03-23 05:01:54', '2020-03-23 05:01:54');
INSERT INTO `userrelations` VALUES (16, 8, 8, '2020-03-31 05:14:38', '2020-03-31 05:14:38');
INSERT INTO `userrelations` VALUES (17, 9, 9, '2020-03-31 05:14:50', '2020-03-31 05:14:50');
INSERT INTO `userrelations` VALUES (18, 10, 10, '2020-10-17 05:50:48', '2020-10-17 05:50:48');
INSERT INTO `userrelations` VALUES (19, 10, 1, '2020-10-17 05:51:09', '2020-10-17 05:51:09');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '唯一，用户名不能重复',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '密码',
  `nickName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '昵称',
  `gender` decimal(10, 0) NOT NULL DEFAULT 3 COMMENT '性别 (1 男性, 2 女性, 3 保密)',
  `picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '头像, 图片地址',
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '城市',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `userName`(`userName`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'lisi', '6fba7c5965a13d0f123278b4dcdde349', '李四', 1, '/1602913784902.60da65f38417449da3a2563571121721.jpg', '广州', '2020-03-21 20:10:43', '2020-10-17 05:49:48');
INSERT INTO `users` VALUES (2, 'zhangsan', '6fba7c5965a13d0f123278b4dcdde349', '张三', 1, 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg', '北京', '2020-03-21 20:11:16', '2020-03-21 20:11:39');
INSERT INTO `users` VALUES (3, 'wangwu', '6fba7c5965a13d0f123278b4dcdde349', '王五', 1, 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg', '深圳', '2020-03-22 17:52:49', '2020-03-22 17:53:11');
INSERT INTO `users` VALUES (8, 'zhangsan2', '6fba7c5965a13d0f123278b4dcdde349', 'zhangsan2', 1, NULL, NULL, '2020-03-31 05:14:37', '2020-03-31 05:14:37');
INSERT INTO `users` VALUES (9, 'lisi2', '6fba7c5965a13d0f123278b4dcdde349', 'lisi2', 1, NULL, NULL, '2020-03-31 05:14:49', '2020-03-31 05:14:49');
INSERT INTO `users` VALUES (10, 'lucas', '6fba7c5965a13d0f123278b4dcdde349', 'lucas', 1, 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg', '广州市', '2020-10-17 05:50:48', '2020-10-17 05:53:13');

SET FOREIGN_KEY_CHECKS = 1;
