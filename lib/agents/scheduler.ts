/**
 * Agent Scheduler
 * 
 * Coordinates the execution of both paddle monitoring and SEO optimization agents
 */

import PaddleMonitorAgent from './paddle-monitor-agent';
import SEOOptimizationAgent from './seo-optimization-agent';

class AgentScheduler {
  private paddleAgent: PaddleMonitorAgent;
  private seoAgent: SEOOptimizationAgent;

  constructor() {
    this.paddleAgent = new PaddleMonitorAgent();
    this.seoAgent = new SEOOptimizationAgent();
  }

  /**
   * Run both agents in sequence
   */
  async runDaily(): Promise<void> {
    console.log('Starting daily agent execution...');
    
    try {
      // Run paddle monitoring first
      console.log('Executing Paddle Monitor Agent...');
      await this.paddleAgent.run();
      
      // Then run SEO optimization
      console.log('Executing SEO Optimization Agent...');
      await this.seoAgent.run();
      
      console.log('Daily agent execution completed successfully');
      
    } catch (error) {
      console.error('Error during agent execution:', error);
      throw error;
    }
  }

  /**
   * Run only paddle monitoring
   */
  async runPaddleMonitoring(): Promise<void> {
    console.log('Running Paddle Monitor Agent only...');
    await this.paddleAgent.run();
  }

  /**
   * Run only SEO optimization
   */
  async runSEOOptimization(): Promise<void> {
    console.log('Running SEO Optimization Agent only...');
    await this.seoAgent.run();
  }
}

export default AgentScheduler;