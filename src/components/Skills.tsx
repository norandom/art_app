import React from 'react';
import styled from 'styled-components';
import { HotTable } from '@handsontable/react';
import type { GridSettings } from 'handsontable/settings';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';
import { useLanguage } from '../context/LanguageContext';

registerAllModules();

const SkillsSection = styled.section`
  padding: var(--section-padding);
  background: var(--background);
  margin: 4.8rem 0 9.6rem 0;
`;

const SkillsContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  font-family: var(--monospace-font);
  padding: 0 1rem;
`;

const Title = styled.h2`
  font-family: var(--monospace-font);
  color: var(--text-color);
  margin-bottom: 2rem;
`;

const TableContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 4rem;
  
  .handsontable {
    font-family: var(--monospace-font) !important;
    background: var(--monospace-box-bg);
    border: 1px solid var(--accent-color);
    border-radius: 6px;
    overflow: hidden;
    
    th, td {
      background: var(--monospace-box-bg);
      color: var(--text-color);
      border-color: var(--accent-color);
      font-family: var(--monospace-font) !important;
      padding: 8px 12px;
    }

    .htCore {
      border-color: var(--accent-color);
    }
  }
`;

interface SkillMatrixData {
  title: string;
  data: string[][];
}

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const skillMatrix = t('skillMatrix') as unknown as SkillMatrixData;

  const settings: GridSettings = {
    data: skillMatrix.data,
    readOnly: true,
    colHeaders: false,
    rowHeaders: false,
    width: '100%',
    height: 'auto',
    stretchH: 'all',
    autoWrapRow: true,
    contextMenu: false,
    manualRowResize: false,
    manualColumnResize: false,
    columns: [
      { 
        width: 200,
        renderer: (instance, td, row, col, prop, value) => {
          if (value) {
            td.style.fontWeight = 'bold';
          }
          td.innerHTML = value || '';
          return td;
        }
      },
      { width: 400 }
    ],
    licenseKey: 'non-commercial-and-evaluation'
  };

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <Title>{skillMatrix.title}</Title>
        <TableContainer>
          <HotTable settings={settings} />
        </TableContainer>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
