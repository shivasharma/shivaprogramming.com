
import React from 'react';
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const chartData = SKILLS.map(s => ({
    subject: s.name,
    A: s.level,
    fullMark: 100
  }));

  return (
    <section id="skills" className="py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">Competencies</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Technical Mastery</h3>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              I specialize in the modern web stack, emphasizing type-safety, performance, and maintainability. My approach combines engineering rigor with creative problem solving.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {['Frontend Architecture', 'Cloud Infrastructure', 'UI/UX Interaction', 'API Design', 'AI Workflow', 'Database Scaling'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  </div>
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-[400px] md:h-[500px] glass rounded-3xl p-8 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#818cf8"
                  fill="#818cf8"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
