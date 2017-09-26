using System;


namespace AkashGutha  
{
    class TenPrint  
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("hello world!!");

            double iterations = 1 << 16;
            Random r = new Random();

            while (iterations-- > 0)
            {
                int next = r.Next(0,11);
                if(next <= 5)
                {
                    Console.Write("\\");
                }
                else
                {
                    Console.Write("/");
                }
            }

        }
    }
}