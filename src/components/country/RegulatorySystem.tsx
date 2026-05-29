import React from 'react';

interface Authority {
  name: string;
  responsibility: string;
}

interface RegulatorySystemProps {
  coreFeatures: string[];
  ruleSystem: string[];
  authorities: Authority[];
}

export const RegulatorySystem = ({ coreFeatures, ruleSystem, authorities }: RegulatorySystemProps) => {
  return (
    <div className="space-y-4">
      <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
        <h3 className="text-lg font-bold text-[#2E3F73] mb-4">核心特征</h3>
        <ul className="list-disc pl-5 space-y-3 text-base leading-7 text-[#334155]">
          {coreFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
        <h3 className="text-lg font-bold text-[#2E3F73] mb-4">规则体系</h3>
        <ul className="list-disc pl-5 space-y-3 text-base leading-7 text-[#334155]">
          {ruleSystem.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>

      <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
        <h3 className="text-lg font-bold text-[#2E3F73] mb-4">监管部门</h3>
        <ul className="list-disc pl-5 space-y-3 text-base leading-7 text-[#334155]">
          {authorities.map((authority, index) => (
            <li key={index}>
              <span className="font-semibold text-[#263247]">{authority.name}：</span>
              {authority.responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};