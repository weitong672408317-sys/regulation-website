#!/usr/bin/env python3
# -*- coding: utf-8 -*-

with open('data/mockData.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 找到印尼 overview 的开始和结束位置
start_line = -1
end_line = -1
in_overview = False

for i, line in enumerate(lines):
    if "id: 'indonesia'" in line:
        in_indonesia = True
    
    if in_indonesia and 'regulatorySystem:' in line:
        for j in range(i, min(i+5, len(lines))):
            if 'overview:' in lines[j]:
                start_line = j
                in_overview = True
                break
    
    if in_overview and start_line != -1:
        if lines[i].strip().endswith("',"):
            end_line = i
            break

print(f"Start line: {start_line}, End line: {end_line}")

# 提取内容并转换格式
if start_line != -1 and end_line != -1:
    # 提取内容
    content = ''.join(lines[start_line:end_line+1])
    
    # 移除 'overview: ' 开头
    content = content.replace("    overview: '", "", 1)
    
    # 移除末尾的 ',\n'
    content = content.rstrip("\n").rstrip(",")
    
    # 移除最后的单引号
    if content.endswith("'"):
        content = content[:-1]
    
    # 将换行转换为 \n
    content = content.replace("\n", "\\n")
    
    # 构建新的单行格式
    new_line = "    overview: '" + content + "',\n"
    
    # 替换原来的多行内容
    new_lines = lines[:start_line] + [new_line] + lines[end_line+1:]
    
    # 写回文件
    with open('data/mockData.ts', 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    
    print("格式转换完成")
else:
    print("未找到印尼 overview")
