#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re

# 读取文件
with open('/Users/zhaoweitong/Desktop/regulation-website/data/mockData.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 找到俄罗斯数据的位置
russia_start = None
for i, line in enumerate(lines):
    if "id: 'russia'," in line:
        russia_start = i
        break

if russia_start is None:
    print("未找到俄罗斯数据")
    exit(1)

print(f"找到俄罗斯数据开始于第 {russia_start} 行")

# 找到 regulatorySystem.overview 的位置
overview_start = None
for i in range(russia_start, min(russia_start + 20, len(lines))):
    if "overview:" in lines[i]:
        overview_start = i
        break

if overview_start is None:
    print("未找到 overview")
    exit(1)

print(f"找到 overview 开始于第 {overview_start} 行")

# 找到 definition 结束的位置
definition_end = None
for i in range(overview_start, min(overview_start + 500, len(lines))):
    if "definition:" in lines[i]:
        # definition 字段以 ' 结尾，后面是 },
        # 找到 definition 字段结束的位置
        for j in range(i, min(i + 200, len(lines))):
            if lines[j].strip() == "}," or lines[j].strip() == "}":
                definition_end = j
                break
        break

if definition_end is None:
    print("未找到 definition 结束")
    exit(1)

print(f"找到 definition 结束于第 {definition_end} 行")

# 提取 overview 的内容（从第 overview_start+1 行开始，到 definition 之前）
# overview 是一个多行字符串，以单引号开始和结束
overview_content_lines = []
in_overview = False
for i in range(overview_start + 1, definition_end):
    line = lines[i]
    if not in_overview:
        if line.strip().startswith("'"):
            in_overview = True
            overview_content_lines.append(line.strip()[1:])  # 去掉开头的单引号
    else:
        if line.strip().endswith("',"):
            # 结束
            overview_content_lines.append(line.strip()[:-2])  # 去掉结尾的 ', 或 ',
            break
        elif line.strip().endswith("'"):
            # 可能结束
            overview_content_lines.append(line.strip()[:-1])
            break
        else:
            overview_content_lines.append(line.rstrip())

overview_content = "\n".join(overview_content_lines)
print(f"提取 overview 内容，长度: {len(overview_content)} 字符")

# 修改 overview 内容
# 1. 将第一个 "核心特征：" 改为 "监管概览\n\n核心特征："
overview_modified = overview_content.replace("核心特征：", "监管概览\n\n核心特征：", 1)

# 2. 删除 "主要产品口径：" 及其后的所有内容
product_scope_pos = overview_modified.find("主要产品口径：")
if product_scope_pos != -1:
    overview_modified = overview_modified[:product_scope_pos]

# 确保结尾正确
overview_modified = overview_modified.rstrip()
if not overview_modified.endswith("。"):
    overview_modified += "。"

print(f"修改后的 overview 内容，长度: {len(overview_modified)} 字符")

# 构建新的 overview 行
# 由于overview内容可能很长，我们需要将其分成多行
# 每行大约 100-120 个字符

new_overview_lines = ["overview: '", ]

# 分割长字符串
current_line = ""
for char in overview_modified:
    current_line += char
    if len(current_line) >= 100 and char in ['。', '：', '，', '\n']:
        new_overview_lines.append("'" + current_line)
        current_line = ""

if current_line:
    new_overview_lines.append("'" + current_line)

# 最后一行应该以 ', 结尾
if new_overview_lines[-1].endswith("'"):
    new_overview_lines[-1] = new_overview_lines[-1][:-1] + "',"

# 替换原来的行
new_lines = lines[:overview_start + 1] + [line + "\n" for line in new_overview_lines] + lines[definition_end:]

# 写回文件
with open('/Users/zhaoweitong/Desktop/regulation-website/data/mockData.ts', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("文件已更新")
print(f"共 {len(new_lines)} 行")
