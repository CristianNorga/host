export type OptionsUpdateTag = {
  /**
   * Nombre del tag a actualizar
   */
  tag: string;
  /**
   * Nueva descripción del tag
   */
  description?: string;
  /**
   * Nueva fecha del tag
   */
  date?: string;
  /**
   * Rama donde se encuentra o se movera el tag
   */
  branch?: string;
};