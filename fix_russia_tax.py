#!/usr/bin/env python3
import re

with open('data/mockData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到俄罗斯的 tax 部分并替换
# 使用正则表达式匹配从 "tax: {" 到下一个顶层对象的开头

# 找到俄罗斯 tax 块的起始位置
pattern = r"(\n    tax: \{\n      exciseTax: '俄罗斯烟草及相关产品)"
match = re.search(pattern, content)
if match:
    start_pos = match.start()
    # 从这个位置开始，找到匹配的 closing brace
    # 需要找到顶层的 } 后面跟着合法的下一个顶层字段
    brace_count = 0
    in_string = False
    i = start_pos
    while i < len(content):
        c = content[i]
        if c == "'" and (i == 0 or content[i-1] != '\\'):
            in_string = not in_string
        elif not in_string:
            if c == '{':
                brace_count += 1
            elif c == '}':
                brace_count -= 1
                if brace_count == 0:
                    end_pos = i + 1
                    break
        i += 1
    
    old_block = content[start_pos:end_pos]
    
    new_block = '''
    tax: {
      exciseTax: '俄罗斯烟草及相关产品主要涉及消费税、进口环节税费、增值税和最低价格监管。消费税税率主要依据税法典第193条；最低价格主要依据卷烟和papirosy统一最低零售价格规则，以及烟草和尼古丁产品最低价格规则。',
      policies: [
        {
          title: '消费税税率表（2026-2028年）',
          description: '• 烟斗烟、吸烟烟草、咀嚼烟草、吮吸烟草，鼻烟、水烟烟草：2026年5,183卢布/公斤，2027年5,390卢布/公斤，2028年5,606卢布/公斤\\n• 雪茄：2026年351卢布/支，2027年365卢布/支，2028年380卢布/支\\n• 小雪茄、比迪、kretek：2026年4,992卢布/1000支，2027年5,192卢布/1000支，2028年5,400卢布/1000支\\n• 卷烟、papirosy：2026年3,278卢布/1000支 + 最高零售价格的18%，且不少于4,452卢布/1000支；2027年3,409卢布/1000支 + 最高零售价格的18%，且不少于4,630卢布/1000支；2028年3,545卢布/1000支 + 最高零售价格的18%，且不少于4,815卢布/1000支\\n• 加热消费用烟草 / 含加热烟草产品：2026年10,915卢布/公斤，2027年11,352卢布/公斤，2028年11,806卢布/公斤\\n• 电子尼古丁输送系统液体：2026年49卢布/毫升，2027年51卢布/毫升，2028年53卢布/毫升\\n• 尼古丁原料：2026年2.4卢布/毫克，2027年2.5卢布/毫克，2028年2.6卢布/毫克\\n• 无烟草尼古丁加热混合物：2026年1,030卢布/公斤，2027年1,071卢布/公斤，2028年1,114卢布/公斤'
        },
        {
          title: '消费税说明',
          description: '卷烟、papirosy采用复合税率，同时适用固定税额、从价税额和最低税额。电子烟设备本身、HNB加热设备本身的消费税已经取消。俄罗斯现行消费税重点落在电子烟液、加热消费用烟草、尼古丁原料、无烟草尼古丁加热混合物等耗材或原料；电子烟烟具、HNB加热器本身通常不按消费税税目征税，但进口时仍需按HS归类确认关税、进口增值税、清关资料和其他监管要求。'
        },
        {
          title: '最低价格表（2026年）',
          description: '• 卷烟、papirosy：153卢布/包\\n• 加热烟草产品 / HNB烟支相关加热烟草产品：24卢布/克\\n• 电子尼古丁输送系统液体（烟弹 / 胶囊等分装形式）：90卢布/毫升\\n• 电子尼古丁输送系统液体（瓶装 / 补充液形式）：72卢布/毫升\\n• 一次性电子烟中的电子尼古丁输送系统液体：120卢布/件；具体交易中按现行最低价格发布口径和产品包装形态确认\\n• 雪茄：814卢布/支\\n• 水烟烟草：包装不超过25克的水烟烟草4,427卢布/公斤\\n• 其他烟草产品：按第1282号令及农业部公布值确认'
        },
        {
          title: '最低价格说明',
          description: '2026年，俄罗斯卷烟和papirosy的统一最低零售价格为153卢布/包。加热烟草和电子烟液适用按重量或容量计算的最低价格：加热烟草产品为24卢布/克；电子尼古丁输送系统液体按包装形态分别适用90卢布/毫升或72卢布/毫升。'
        }
      ]
    },'''
    
    content = content[:start_pos] + new_block + content[end_pos:]
    
    with open('data/mockData.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print('Successfully replaced Russia tax section')
else:
    print('Could not find Russia tax section')
