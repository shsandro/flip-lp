import { Grid } from '@material-ui/core';
import React from 'react';
import ExplanatoryCard from './ExplanatoryCard';

const ExplanatoryGroup = () => (
  <>
    <Grid container alignItems="stretch" spacing={5}>
      <Grid item xs={12} sm={6} lg={3}>
        <ExplanatoryCard
          src="/undraw_setup_analytics.svg"
          title="Indicadores em tempo real"
          secondTitle="análise"
          description="Painéis e relatórios elaborados
            para embasar suas decisões de
            forma rápida e dinâmica. Avalie
            em tempo real o desempenho
            comercial de sua imobiliária e
            adote estratégias para
            maximizar seus resultados."
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <ExplanatoryCard
          src="/undraw_business_deal.svg"
          title="Roleta de distribuição
            automática de leads"
          secondTitle="conversão"
          description="Para ter maior conversão, tempo
            é prioridade. Descubra em nossa
            ferramenta como a roleta pode
            aumentar significativamente seu
            volume de negócios. Sem
            processos manuais, os leads são
            recebidos e transferidos de
            forma automática e
            personalizada."
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <ExplanatoryCard
          src="/undraw_apartment_rent.svg"
          title="Gestão completa de
            imóveis e clientes"
          secondTitle="integração"
          description="Você sabe realmente como anda
            a qualidade da sua carteira? Sua
            imobiliária precisa de vendas e
            não apenas de leads. A Flip foi
            projetada para gerenciar os
            imóveis e clientes da sua carteira,
            com integração entre portais,
            gestão financeira, controle de
            chaves e muito mais."
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <ExplanatoryCard
          src="/undraw_product_tour.svg"
          title="Site integrado e
            inteligente"
          secondTitle="performance"
          description="Seu site é a vitrine da sua
            imobiliária digital. É a primeira
            etapa da sua esteira de vendas e
            a Flip tem os recursos de ponta
            para alavancar a experiência do
            seu cliente, desde o buscador
            inteligente e agendamento de
            visitas até o fechamento de
            venda."
        />
      </Grid>
    </Grid>
  </>
);

export default ExplanatoryGroup;
