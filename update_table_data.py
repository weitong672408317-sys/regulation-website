#!/usr/bin/env python3

with open('data/mockData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 定义各国的新数据
new_data = {
    'china': {
        'status': '烟草专卖体系下的严格管制市场，新型烟草制品从严控制',
        'productQualification': '传统卷烟、电子烟有明确监管路径；HNB烟支、尼古丁袋/口含产品未开放境内商业化',
        'restrictions': '重点适用烟草专卖许可、生产计划、电子烟交易管理平台、产品技术审评、强制标准和出口回流监管'
    },
    'hongkong': {
        'status': '传统烟草有限准入，新型烟草及另类吸烟产品严格禁止',
        'productQualification': '传统烟草可有限准入；电子烟、加热烟、草本烟、含烟草口含产品原则禁止；不含烟草但含尼古丁口含产品需按毒药/药剂制品口径判断',
        'restrictions': '传统烟草重点适用烟草税、完税证明、包装警示、广告限制和私烟执法；另类吸烟产品和无烟烟草产品不存在普通商业准入路径'
    },
    'singapore': {
        'status': '传统烟草有限准入，新型产品原则禁止',
        'productQualification': '传统烟草可在许可和税务框架下经营；电子烟、HNB烟支、尼古丁袋、雾化器、烟油、水烟烟草等原则禁止',
        'restrictions': '传统烟草重点适用进口/零售许可、消费税、标准化包装、禁陈列和禁烟场所规则；禁止类产品不存在普通商业准入路径'
    },
    'malaysia': {
        'status': '传统烟草和HNB烟支可准入，含尼古丁电子烟受毒物/药剂监管限制',
        'productQualification': '传统烟草、HNB烟支可准入；不含尼古丁电子烟可按Act 852进入注册监管；含尼古丁电子烟无普通商业上市路径；尼古丁袋/口含膜需按成分判断',
        'restrictions': '重点适用Act 852产品注册、包装标签、广告促销、线上销售、公开陈列限制；液体/凝胶尼古丁及不含烟草但含尼古丁口含产品涉及毒物/药剂监管'
    },
    'russia': {
        'status': '烟草及尼古丁产品强监管市场',
        'productQualification': '传统烟草、HNB烟支、电子烟、烟油、烟弹可准入；尼古丁袋、snus、nasvay、食品型尼古丁产品及口含、鼻吸、咀嚼类尼古丁产品禁售',
        'restrictions': '重点适用生产/进口投入流通许可、数字标识、原料追溯、消费税、最低价格、销售地点和广告促销限制'
    },
    'uae': {
        'status': '可准入市场，监管重点在许可、认证、税务和地方销售管理',
        'productQualification': '传统烟草、HNB烟支、电子烟、烟油、无烟草尼古丁袋原则上可准入；含烟草口含/咀嚼类产品禁止或高度受限',
        'restrictions': '重点适用ECAS/CoC产品认证、消费税、数字税票、进口清关、地方销售许可及自由区/本土市场区分管理'
    },
    'indonesia': {
        'status': '可准入且相对友好的市场，监管重点在税务和流通合规',
        'productQualification': '传统烟草、HNB烟支、电子烟、烟草薄片、烟叶、普通辅材原则上可准入；尼古丁袋/口含膜监管口径仍需确认',
        'restrictions': '重点适用NPPBKC、消费税、税票、进口批准、包装健康警示、年龄限制、广告限制和非法流通执法'
    },
    'paraguay': {
        'status': '相对开放市场，注册、授权和税务合规导向',
        'productQualification': '传统烟草、电子烟、HNB烟支、雾化器、烟油、烟弹、配件和耗材原则上可准入；尼古丁袋/口含膜未见明确禁售',
        'restrictions': '重点适用DINAVISA产品注册、经营场所授权、烟草主体登记、尼古丁含量、标签、ISC税务和进口申报规则'
    }
}

# 更新每个国家的数据
for country_id, data in new_data.items():
    # 找到该国家的定义
    import re
    pattern = rf"(\n\s+\{{?\s*id:\s*['\"]?{country_id}['\"]?.*?status:\s*['\"])(.*?)(['\"],\s*\n\s+productQualification:\s*['\"])(.*?)(['\"],\s*\n\s+restrictions:\s*['\"])(.*?)(['\"])"
    
    match = re.search(pattern, content, re.DOTALL)
    if match:
        # 替换status
        content = content[:match.start(2)] + data['status'] + content[match.end(2):match.start(4)]
        # 重新计算位置
        match = re.search(pattern, content, re.DOTALL)
        # 替换productQualification
        content = content[:match.start(4)] + data['productQualification'] + content[match.end(4):match.start(6)]
        # 重新计算位置
        match = re.search(pattern, content, re.DOTALL)
        # 替换restrictions
        content = content[:match.start(6)] + data['restrictions'] + content[match.end(6):]
        print(f'Updated {country_id}')
    else:
        print(f'Could not find {country_id}')

with open('data/mockData.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done!')
